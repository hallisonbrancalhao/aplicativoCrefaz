import axios from 'axios';
import { useState } from 'react';
import { View, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { styles, themeWhite } from '../styles';
import { Alert } from '../Modules/Alert'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('hallison.brancalhao@crefaz.com.br');
    const [password, setPassword] = useState('123456');
    const [errorMessage, setErrorMessage] = useState(''); 

    const showAlert = (erro) => {
        console.log(erro)
      }

    const logar = async () => {

        const json = JSON.stringify({ "email": email, "password": password });

        try {
            const res = await axios.post('http://localhost/api/login/auth', json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            navigation.navigate('Posts');
        } catch (error) {
            if (typeof error.response.data.message !== 'undefined') {
                setErrorMessage(error.response.data.message)
            } else {
                setErrorMessage('Erro no sistema, tente novamente mais tarde')
            }
        }
    }

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
                onPress={logar}
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