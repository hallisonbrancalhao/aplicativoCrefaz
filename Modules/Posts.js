import axios from 'axios';
import { useState } from 'react';
import { View, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { styles, themeWhite } from '../styles';

const Posts = ({ route, navigatio }) => {

    const { email } = route.params;

    return (
        <View style={styles.main}>
            <Text style={styles.subtitle}>oi {email}</Text>
        </View>
    )
}

export default Posts;