import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const AppTextInput = ({ value, onChangeText, placeholder, keyboardType, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        {...otherProps}
      />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEFEE',
    width: '100%',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 20,
  },
})