import React, { useState } from 'react'
import { Text, View,  SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import FormTextField from '../component/FormTextField'
import { sendPasswordResetLink } from '../services/AuthServices'

export default function ForgotPasswordScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({})

    async function hadleForgotPassword() {
        setErrors({})

        try {
            await sendPasswordResetLink(email)
        } catch (e) {
          console.log(e)
            if (e.response?.status === 422) {
                setErrors(e.response.data.errors)
            }            
        }
    }
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <FormTextField 
          label="Email address:"
          placeholder='Email'
          onChangeText={text => setEmail(text)}
          value={email}
          autoCapitalize="none"
          keyboardType='email-address'
          errors={errors.email}
        />
        <TouchableOpacity style={styles.button} onPress={hadleForgotPassword}>
          <Text style={styles.buttonText}>Send Mail !</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>    
  )
}

const styles = StyleSheet.create({
  wrapper: {
    bacgrondColor: '#fff',
    flex: 1 
  },
  container: {
    padding: 20,
    //rowGap:16 
  },
  button: {
    color: 'blue',
  }
})