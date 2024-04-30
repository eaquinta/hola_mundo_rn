import { View, Text } from "react-native";
//import tw from 'twrnc'
//import Title from "./Title"
import FormLabel from './FormLabel'

const FormInputGroup = ({children}) => {
    return (
        <View>           
            {children}
        </View>
    )
}

export default function Form() {
    return (
        <View>
            <FormInputGroup >
                <FormLabel text="Email" />              
            </FormInputGroup>
        </View>
    )
}