import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
//import tw from 'twrnc'

export default function FormButton(props) {
    let { 
        clickFunction,
        text,
        primary,
        ...other
    } = props

    let primaryStyling =  tw`bg-blue-500 border-none px-6 py-2 rounded`,
    secondaryStyling = tw`border-blue-500 border bg-transparent px-6 py-2 rounded`,
    primaryText = tw`text-center text-white font-bold`,
    secondaryText = tw `text-center text-blue-500 font-bold`
    return (
        <TouchableOpacity style={primary ? primaryStyling : secondaryStyling}>
            <Text style={primary ? primaryText : secondaryText }>{text}</Text>
        </TouchableOpacity>
    )
}