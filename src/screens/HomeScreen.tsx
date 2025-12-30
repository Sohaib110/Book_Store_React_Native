import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BookCard from '../components/BookCard'
import { getListOfBooks } from '../api/http'

const HomeScreen = () => {

  const [bookList, setBookList] = useState();

  useEffect(() => {
    getListOfBooks({
      onSuccess: (books) => {
        setBookList(books);
      },
      onError: (error) => {
        console.log("An error occurred while fetching books:", error);
      }
    })
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookCard authorName={item.name_of_author} price={item.price} imageURI={item.cover} title={item.title} />}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})