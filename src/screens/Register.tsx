import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert, StatusBar } from 'react-native'
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type registerProps = NativeStackScreenProps<RootStackParamList, 'Register'>

const Register = ({navigation}:registerProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  })
  
  const validateForm = () => {
    let isValid = true
    const newErrors = { 
      name: '', 
      email: '', 
      password: '', 
      confirmPassword: '' 
    }
    
    // Name validation
    if (!name) {
      newErrors.name = 'Name is required'
      isValid = false
    }
    
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
    
    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
      isValid = false
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match'
      isValid = false
    }
    
    setErrors(newErrors)
    return isValid
  }
  
  const handleRegister = async () => {
    if (!validateForm()) return
    
    setIsLoading(true)
    
    try {
      // Implement your registration API call here
      // const response = await registerUser(name, email, password)
      
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes
      Alert.alert(
        'Registration Successful',
        'Your account has been created successfully!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login')
          }
        ]
      )
    } catch (error) {
      Alert.alert('Error', 'Something went wrong, please try again')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ScrollView className="flex-1 bg-white pt-16">
      <StatusBar barStyle="light-content" />
      <View className="p-6 pt-12">
        {/* Logo */}
        <View className="items-center mb-10">
          <Image 
            source={require('../../assets/LearnTech.png')}
            className="w-20 rounded-3xl h-20"
          />
        </View>
        
        {/* Header */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-gray-800">Create Account</Text>
          <Text className="text-gray-500 mt-1">Sign up to get started</Text>
        </View>
        
        {/* Form */}
        <View className="space-y-4">
          {/* Name */}
          <View>
            <Text className="text-gray-700 mb-2 font-medium">Full Name</Text>
            <TextInput
              className="bg-gray-100 p-4 rounded-lg text-gray-800 mb-1"
              placeholder="Enter your full name"
              placeholderTextColor="#9ca3af"
              value={name}
              onChangeText={setName}
            />
            {errors.name ? (
              <Text className="text-red-500 mt-0 mb-2">{errors.name}</Text>
            ) : null}
          </View>

          {/* Email */}
          <View>
            <Text className="text-gray-700 mb-2 font-medium">Email</Text>
            <TextInput
              className="bg-gray-100 p-4 rounded-lg text-gray-800 mb-1"
              placeholder="Enter your email"
              placeholderTextColor="#9ca3af"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            {errors.email ? (
              <Text className="text-red-500 mt-0 mb-2">{errors.email}</Text>
            ) : null}
          </View>
          
          {/* Password */}
          <View>
            <Text className="text-gray-700 mb-2 font-medium">Password</Text>
            <View className="relative">
              <TextInput
                className="bg-gray-100 p-4 rounded-lg text-gray-800"
                placeholder="Create a password"
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
          
          {/* Confirm Password */}
          <View>
            <Text className="text-gray-700 mb-2 font-medium">Confirm Password</Text>
            <View className="relative">
              <TextInput
                className="bg-gray-100 p-4 rounded-lg text-gray-800"
                placeholder="Confirm your password"
                placeholderTextColor="#9ca3af"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity 
                className="absolute right-4 top-4"
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Text className="text-blue-600">{showConfirmPassword ? 'Hide' : 'Show'}</Text>
              </TouchableOpacity>
            </View>
            {errors.confirmPassword ? (
              <Text className="text-red-500 mt-1">{errors.confirmPassword}</Text>
            ) : null}
          </View>
          
          {/* Register Button */}
          <TouchableOpacity
            className={`bg-blue-600 py-4 rounded-lg items-center mt-4 ${isLoading ? 'opacity-70' : ''}`}
            onPress={handleRegister}
            disabled={isLoading}
          >
            <Text className="text-white font-bold text-lg">
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Text>
          </TouchableOpacity>
          
          {/* Login Link */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-600">Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.replace('Login')}>
              <Text className="text-blue-600 font-semibold">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Register