import axios from "axios";
import { Alert } from "react-native";

const endpointURL = "https://6952614a3b3c518fca12765a.mockapi.io/books";

export const getListOfBooks = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(endpointURL);
    console.log(JSON.stringify(response.data, null));
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log(error);
  }
};

export const getBookByID = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(`${endpointURL}/5`);
    console.log(JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log("An Error Occurred", error);
  }
};

export const deleteBookByID = async ({ onSuccess, onError, itemID }) => {
  try {
    const response = await axios.delete(`${endpointURL}/${itemID}`)
    Alert.alert("Book Is Deleted Successfully")
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log(error)
  }
}


export const createBook = async ({ onSuccess, onError, body }) => {
  try {
    const response = await axios.post(endpointURL, body)

    Alert.alert("Book Has Been Created!")
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log(error)
  }
}

export const updateBook = async ({ onSuccess, onError, body, itemID }) => {
  try {
    const response = await axios.put(`${endpointURL}/${itemID}`, body)

    Alert.alert("Book Has Been Updated!")
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log(error)
  }
}