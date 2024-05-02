import React from "react";
import { Text, View} from 'react-native';
import RepositoryList from "./RepositoryList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContext from '../context/AuthContext'
import { loadUser } from "../services/AuthServices";
import {useState, useEffect} from 'react'

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack = createNativeStackNavigator()


const Main = () => {
    const [user, setUser] = useState()
    const [status, setStatus] = useState('loading')

    useEffect(() => {
        async function runEffect() {
            try {                
                const user = await loadUser();                
                setUser(user)
            } catch (e) {
                console.log("Failed to load user", e)
                //Alert.alert('Failed to load user', e)
            }
            setStatus('idle')
        }

        runEffect()
    }, [])
    if (status === 'loading') {
        return <SplashScreen/>
    }
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: true}}>
                {                
                user 
                ? (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </>
                ) 
                : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
                    </>
                )}
                
            </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    )
}

export default Main