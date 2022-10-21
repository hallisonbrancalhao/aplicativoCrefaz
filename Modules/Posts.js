import axios from 'axios';
import { useState } from 'react';
import { View, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { styles, themeWhite } from '../styles';

const Posts = ({ navigation, res }) => {
    const response = res;
    console.log(response)
    
    return (
        <View style={styles.main}>
            <Text>oi</Text>
            
        </View>
    )
}

export default Posts;