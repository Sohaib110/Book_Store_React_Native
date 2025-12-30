import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface HomeScreenProps {
    title: string;
    price: string;
    authorName: string;
    imageURI: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ title, price, authorName, imageURI }) => {
    return (
        <View style={styles.container}>
            {/* Image Section */}
            <Image
                source={{ uri: imageURI }}
                style={styles.coverImage}
            />
            {/* Details Section */}
            <View style={styles.detailsContainer}>
                <Text style={styles.bookName}>{title}</Text>
                <Text style={styles.authorName}>{authorName}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            {/* Delete and Edit Section */}
            <View style={styles.deleteEditContainer}>
                <TouchableOpacity style={styles.circleButton} >
                    <MaterialIcons name="delete-outline" size={24} color="red" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleButton}><AntDesign name="edit" size={20} color="blue" /></TouchableOpacity>

            </View>
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
    },
    coverImage: {
        width: "25%",
        height: 120,
        borderRadius: 8,
        resizeMode: 'stretch',

    },
    detailsContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 10,
    },
    bookName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    authorName: {
        fontSize: 14,
        color: '#888',
        marginVertical: 3,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#25a',

    },
    deleteEditContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circleButton: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: 10,

    }
})