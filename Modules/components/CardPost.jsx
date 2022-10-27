import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { styles } from './styles';
import RenderHtml from 'react-native-render-html';


const CardPost = ({ props, navigation }) => {
    const source = {
        html: props.content
      };

    const tagsStyles = {
        p: {
            color: 'white'
        },
        a: {
            color: 'white'
        }
    };

const goToSinglePost = () => {
    console.log(props)
    navigation.navigate('SinglePost')
}

    return (
        <View style={styles.card}> 
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subtitle}>{props.shortDescription}</Text>
            <Button
                style={styles.button}
                color='white'
                icon="plus"
                onPress={goToSinglePost}
            >
            Ver Mais
            </Button>
        </View>
    );
}
export default CardPost;