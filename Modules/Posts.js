import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button, Card } from 'react-native-paper';
import { styles, themeWhite } from '../styles';
import { result } from '../assets/posts'
import CardPost from "./components/CardPost.jsx";
import api from "./api";


const Posts = ({ navigation }) => {

    // useEffect(() => {
    //     getPost();
    // }, []);

    // const getPost = async () => {

    //     const JWTToken = await AsyncStorage.getItem('id');
    //     const AuthStr = 'Bearer ' + JWTToken;
 
    //     const result = await api.get("/post", {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': AuthStr
    //         }
    //     }).then(response => {
    //         console.log(response.data);
    //     })
    //         .catch((error) => {
    //             console.log('error ' + error);
    //         });
    //     console.log(result)
    // }

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

export default Posts;