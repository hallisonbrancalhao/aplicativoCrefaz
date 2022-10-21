import axios from 'axios';
import { useState } from 'react';
import { View, Image } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { styles, themeWhite } from '../styles';

const RecoverPassword = ({ navigation }) => {

    const goToLogin = () => {
        navigation.navigate('Login')
    }

    const [password, setPassword] = useState('');

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
                label="E-mail de recuperção"
                underlineColor="white"
                activeUnderlineColor="white"
                theme={themeWhite}
                onChangeText={setPassword}
                value={password}
            />
            <Button
                style={styles.button}
                theme={themeWhite}
                color='white'
                icon="account"
                onPress={goToLogin}
            >
                Recuperar Senha
            </Button>
        </View>
    )
}

export default RecoverPassword;