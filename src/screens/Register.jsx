import React, {useState} from 'react'
import {View, Text} from 'react-native'
import Form from '../components/Form'
import Title from  '../components/Title'
import axios from 'axios'
import {BASE_URL} from '@env'

export default function Register() {
    const [errorMessage, setError] = useSate(''),
          [successMessage, setSuccess] = useState('')

    axios.post(`${BASE_URL}/api/register`)
    .then( response => {
        console.log(response.data)
    })
    .catch(e => console.log(e.message))

    return (
        <View>

        </View>
    )
}