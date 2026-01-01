import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AntDesign name="plus" size={50} color="#fff" />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    backgroundColor: '#1273DE',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: Platform.OS === 'android' ? 20 : 0,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  }
})