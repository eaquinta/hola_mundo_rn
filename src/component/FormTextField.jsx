import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function FormTextField({label, errors = [], ...rest}) {

  return (
    <>
      { label && <Text style={styles.label}>{label}</Text> }
      <TextInput style={styles.TextInput} autoCapitalize='none' {...rest} />
      {errors.map((err) => (     
          <Text key={err} style={styles.error}>{err}</Text>
        ))}
    </>
  )
}

const styles = StyleSheet.create({
  label: {
    color: '#334155', 
    padding: 0,
    margin: 0, 
    fontWeight: 'bold',    
  },
  TextInput: {
    backgroundColor: '#f1f5f9',
    height: 40,
    marginTop: 4,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#cbd5e1',
    padding: 10,
  },
  error: {
    color: 'red',
    marginTop: 2,
  }
})