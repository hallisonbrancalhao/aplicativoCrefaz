import axios from 'axios';
import React, { useState, useContext } from "react";
import { Context } from "./context/authContext";
import { View, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { styles, themeWhite } from '../styles';
const Login = ({ navigation }) => {

    const { loginUser } = useContext(Context)
    const [email, setEmail] = useState('hallison.brancalhao@crefaz.com.br');
    const [password, setPassword] = useState('123456');

    const [errorMessage, setErrorMessage] = useState(''); 

    const goToForgotPassword = () => {
        navigation.navigate('RecuperarSenha')
    }

    return (
        <View style={styles.main}>

            <Image
                source={require('../src/logo-white.png')}
                style={{
                    width: 200,
                    height: 50,
                    resizeMode: 'contain'
                }}
            />

            <TextInput
                style={styles.input}
                label="Email"
                underlineColor="white"
                activeUnderlineColor="white"
                theme={themeWhite}
                onChangeText={setEmail}
                value={email}
            />

            <TextInput
                style={styles.input}
                theme={themeWhite}
                label="Senha"
                underlineColor="white"
                activeUnderlineColor="white"
                onChangeText={setPassword}
                secureTextEntry={true}
                value={password}
            />
            <Button
                style={styles.button}
                theme={themeWhite}
                color='white'
                icon="account"
                onPress={() => loginUser(email, password)}
            >
                Entrar
            </Button>

            <Text style={styles.error}>
                { errorMessage }
            </Text>
            
            <Text style={styles.link} onPress={goToForgotPassword}>
                Esqueci minha senha
            </Text>


        </View>
    )
}

export default Login;