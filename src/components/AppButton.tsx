import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AppButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>Save</Text>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1273DE',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

})