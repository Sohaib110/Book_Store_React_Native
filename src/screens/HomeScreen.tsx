import { FlatList, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BookCard from '../components/BookCard'
import { getListOfBooks, deleteBookByID } from '../api/http'
import AddButton from '../components/AddButton'
import AddBookScreen from './AddBookScreen'


const HomeScreen = () => {

  const [bookList, setBookList] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const getListOfBooksFN = () => {
    getListOfBooks({
      onSuccess: (books) => {
        setBookList(books);
      },
      onError: (error) => {
        console.log("An error occurred while fetching books:", error);
      }
    })
  }
  useEffect(() => {
    getListOfBooksFN();
  }, []);

  const onDeleteItem = (item) => {
    console.log(item.id);
    deleteBookByID({
      onSuccess: () => {
        getListOfBooksFN();
      },
      onError: (error) => console.log("An error occurred while deleting the book:", error),
      itemID: item.id,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookCard authorName={item.name_of_author} price={item.price} imageURI={item.cover} title={item.title} onDeleteItem={() => onDeleteItem(item)} />}
      />
      <AddButton onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <AddBookScreen onCloseIconPress={() => setModalVisible(false)} />
      </Modal>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})