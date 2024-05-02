import React from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { logout } from '../services/AuthServices';

export default function Home() {
  const { user, setUser } = useContext(AuthContext);

  async function handleLogout() {
    console.log('aqui')
    await logout()
    setUser(null)
  }

  return (
    <SafeAreaView>
      <Text>Welcome home, {user.name}</Text>
      <Button title='Salir' onPress={handleLogout}></Button>
    </SafeAreaView>
  )
}