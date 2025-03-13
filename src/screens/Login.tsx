import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const Login = ({navigation}:LoginProps) => {
//   const navigation = useNavigation<LoginScreenNavigationProp>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({ email: '', password: '' })
  
  const validateForm = () => {
    let isValid = true
    const newErrors = { email: '', password: '' }
    
    // Email validation
    if (!email) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid'
      isValid = false
    }
    
    // Password validation
    if (!password) {
      newErrors.password = 'Password is required'
      isValid = false
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
      isValid = false
    }
    
    setErrors(newErrors)
    return isValid
  }
  
  const handleLogin = async () => {
    if (!validateForm()) return
    
    setIsLoading(true)
    
    try {
      // Implement your login API call here
      // const response = await loginUser(email, password)
      
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes - replace with real authentication
      if (email === 'test@example.com' && password === 'password') {
        navigation.navigate('Home')
      } else {
        Alert.alert('Login Failed', 'Invalid email or password')
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong, please try again')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6 pt-12">
        {/* Logo */}
        <View className="items-center mb-10">
          {/* <Image 
            source={require('../../assets/logo.png')}
            className="w-40 h-40"
            resizeMode="contain"
          /> */}
          <Text className="text-2xl font-bold text-blue-600 mt-4">LearnTech</Text>
        </View>
        
        {/* Header */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-gray-800">Welcome Back</Text>
          <Text className="text-gray-500 mt-1">Sign in to your account</Text>
        </View>
        
        {/* Form */}
        <View className="space-y-4">
          {/* Email */}
          <View>
            <Text className="text-gray-700 mb-2 font-medium">Email</Text>
            <TextInput
              className="bg-gray-100 p-4 rounded-lg text-gray-800"
              placeholder="Enter your email"
              placeholderTextColor="#9ca3af"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            {errors.email ? (
              <Text className="text-red-500 mt-1">{errors.email}</Text>
            ) : null}
          </View>
          
          {/* Password */}
          <View>
            <Text className="text-gray-700 mb-2 font-medium">Password</Text>
            <View className="relative">
              <TextInput
                className="bg-gray-100 p-4 rounded-lg text-gray-800"
                placeholder="Enter your password"
                placeholderTextColor="#9ca3af"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity 
                className="absolute right-4 top-4"
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text className="text-blue-600">{showPassword ? 'Hide' : 'Show'}</Text>
              </TouchableOpacity>
            </View>
            {errors.password ? (
              <Text className="text-red-500 mt-1">{errors.password}</Text>
            ) : null}
          </View>
          
          {/* Forgot Password */}
          <View className="items-end">
            <TouchableOpacity>
              <Text className="text-blue-600">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          
          {/* Login Button */}
          <TouchableOpacity
            className={`bg-blue-600 py-4 rounded-lg items-center ${isLoading ? 'opacity-70' : ''}`}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text className="text-white font-bold text-lg">
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Text>
          </TouchableOpacity>
          
          {/* Register */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-600">Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text className="text-blue-600 font-semibold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login