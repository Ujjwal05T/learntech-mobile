import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>


const Home = ({navigation}:HomeProps) => {
  return (
   <View >
   <Text className='text-blue-500'>Home Sceen</Text>
   <Button 
      title='Go to Login'
      onPress={() => navigation.navigate('Login')}
      />
 </View>
  )
}

export default Home