import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const AddBookScreen = ({ onCloseIconPress }) => {
    return (
        <SafeAreaView>
            <FontAwesome name="window-close" size={30} color="#E81D1D" onPress={onCloseIconPress} />
        </SafeAreaView>
    )
}

export default AddBookScreen

const styles = StyleSheet.create({})