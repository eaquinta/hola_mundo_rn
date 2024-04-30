import React from  'react'
import {View, Text, StyleSheet} from 'react-native'
import StyledText from '../Theme/StyledText'

const styles = StyleSheet.create({ 
    container: {
        padding: 20
    },
    strong: {
        color: '#09f',
        fontWeight: "bold",
        marginBottom: 5,

    }
})

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyledText bold color='primary'>Id: {props.id}</StyledText>
        <StyledText small>Full Name {props.fullName}</StyledText>        
    </View>
)

export default  RepositoryItem