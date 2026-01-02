import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const AddBookScreen = ({ onCloseIconPress }) => {

    const [bookName, setBookName] = useState();
    const [authorName, setAuthorName] = useState();
    const [coverURL, setCoverURL] = useState();
    const [price, setPrice] = useState();

    return (
        <SafeAreaView>
            <FontAwesome style={{ margin: 20 }} name="window-close" size={35} color="#E81D1D" onPress={onCloseIconPress} />
            <View style={styles.body}>
                <Text style={styles.title}>Book Details</Text>
                <AppTextInput value={bookName} onChangeText={setBookName} placeholder={"Book Name"} keyboardType={"default"} />
                <AppTextInput value={authorName} onChangeText={setAuthorName} placeholder={"Author Name"} keyboardType={"default"} />
                <AppTextInput value={coverURL} onChangeText={setCoverURL} placeholder={"Cover Image"} keyboardType={"default"} />
                <AppTextInput value={price} onChangeText={setPrice} keyboardType={"numeric"} placeholder={"Price"} />
                <AppButton onPress={onCloseIconPress} />
            </View>

        </SafeAreaView>
    )
}

export default AddBookScreen

const styles = StyleSheet.create({
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
    },

})