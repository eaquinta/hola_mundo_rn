import React from 'react'
import { TextInput } from 'react-native'
//import tw from 'twrnc'

export default function FormInput(props) {
    let {...other } = props
    return (
        <TextInput {...others} />
    )
}