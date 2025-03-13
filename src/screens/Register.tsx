import { View, Text } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type registerProps = NativeStackScreenProps<RootStackParamList, 'Register'>

const Register = () => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}

export default Register