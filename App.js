import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Modules/Login';
import Posts from './Modules/Posts';
import RecoverPassword from './Modules/RecoverPassword';
import SinglePost from './Modules/SinglePost';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="RecuperarSenha" options={{ headerShown: false }} component={RecoverPassword} />
        <Stack.Screen name="Posts" options={{ headerShown: true }} component={Posts} />
        <Stack.Screen name="SinglePost" options={{ headerShown: true }} component={SinglePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}