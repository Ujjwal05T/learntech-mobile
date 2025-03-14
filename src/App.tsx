import '../global.css'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Verify from './screens/Verify';
import News from './screens/News';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'LearnTech',
          headerShown: false
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Login',
          headerShown: false
        }} />
        <Stack.Screen name="Register" component={Register} options={{
          title: 'Register',
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App