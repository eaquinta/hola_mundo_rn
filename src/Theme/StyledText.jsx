import React from  'react'
import { Text, StyleSheet} from 'react-native'
import theme from '../Theme/theme.js';

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    blue: {
        color: 'blue'
    },
    big: {
        fontSize: 20,
    },
    small: {
        fontSize: 8,
    },
    colorPrimary: {
        color: theme.colors.textPrimary,
    }
})

export default function StyledText ({children, color, bold, big, small, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,       
        bold && styles.bold,
        big && styles.big,
        small && styles.small
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}