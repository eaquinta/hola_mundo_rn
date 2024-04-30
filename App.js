import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  console.log('HOla')
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={()=> Alert.alert('Hemos tocado el texto')}>
        <Text>Hola mundo!</Text>
      </TouchableWithoutFeedback>      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
