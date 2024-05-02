import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Button } from 'react-native';
import {login, loadUser} from '../services/AuthServices'
import AuthContext from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const {setUser} = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const ShowErrors = ({e = []}) => {
    return (
      <>
        {e.map((err) => (     
          <Text key={err} style={styles.error}>{err}</Text>
        ))}
      </>
    )
  }

  const handleLogin = async () => {
    setErrors({})
    try {      
      await login({
        email: email,
        password: password,
        device_name: `${Platform.OS} ${Platform.Version}`,
      })
      const user = await loadUser()
      setUser(user)
      console.log(user)
    } catch (e) {     
      if(e.response?.status === 422) {
        setErrors(e.response.data.errors)
      }
      console.log(errors.email)
      console.error('Login error:', e.response.data.errors);
      Alert.alert('Login failed', 'Please check your credentials and try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={text => setEmail(text)}
        value={email}
        autoCapitalize="none"
        keyboardType='email-address'
      />
      <ShowErrors e={errors.email}/>      
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <ShowErrors e={errors.password}/>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <Button title='Frogot Password' onPress={() => {
        navigation.navigate("Forgot Password");
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 2,
  }
});

export default LoginScreen;
