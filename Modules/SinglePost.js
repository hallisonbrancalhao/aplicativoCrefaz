import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';
import { styles, themeWhite } from '../styles';
import { result } from '../assets/posts'
import CardPost from "./components/CardPost.jsx";
import api from "./api";


const SinglePost = ({ navigation }) => {

    return (
        <View style={styles.main}>
            { 
                result.map(element => {
                return(
                    <CardPost props={element}/>
                )
                }) 
            }
        </View>
    )
}

export default SinglePost;