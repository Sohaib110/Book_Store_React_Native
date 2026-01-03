import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { createBook } from '../api/http';

const AddBookScreen = ({ onCloseIconPress, onCreateSuccess, selectedItem }) => {

    const [bookName, setBookName] = useState(selectedItem?.title ?? "");
    const [authorName, setAuthorName] = useState( selectedItem?.name_of_author ?? "");
    const [coverURL, setCoverURL] = useState( selectedItem?.cover ?? "");
    const [price, setPrice] = useState( selectedItem?.price ?? "");

    const createNewBook = () => {
        createBook({
            body: {
                title: bookName,
                name_of_author: authorName,
                cover: coverURL,
                price: price,
            },
            onSuccess: () => {
                onCloseIconPress()
                onCreateSuccess()
            },
            onError: () => { Alert.alert("Error occurred while creating the book") },
        })
    }
    
    const editBook = () => {
        updateBook({
            body: {
                id: selectedItem.id,
                title: bookName,
                name_of_author: authorName,
                cover: coverURL,
                price: price,
            },
            onSuccess: () => {
                onCloseIconPress()
                onCreateSuccess()
            },
            onError: () => { Alert.alert("Error occurred while creating the book") },
        })
    }

    return (
        <SafeAreaView>
            <FontAwesome style={{ margin: 20 }} name="window-close" size={35} color="#E81D1D" onPress={onCloseIconPress} />
            <View style={styles.body}>
                <Text style={styles.title}>Book Details</Text>
                <AppTextInput value={bookName} onChangeText={setBookName} placeholder={"Book Name"} keyboardType={"default"} />
                <AppTextInput value={authorName} onChangeText={setAuthorName} placeholder={"Author Name"} keyboardType={"default"} />
                <AppTextInput value={coverURL} onChangeText={setCoverURL} placeholder={"Cover Image"} keyboardType={"default"} />
                <AppTextInput value={price} onChangeText={setPrice} keyboardType={"numeric"} placeholder={"Price"} />
                <AppButton onPress={!!selectedItem ? editBook : createNewBook} />
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