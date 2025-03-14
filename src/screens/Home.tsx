import { Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}:HomeProps) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View className="pt-12 pb-8 px-6 items-center"> 
        <Text className="text-3xl font-bold text-gray-800 text-center">LearnTech</Text>
        <Text className="text-lg text-gray-500 text-center mt-2">Your gateway to tech</Text>
      </View>
      
      {/* Description Section */}
      <View className="px-8 py-8">
        <Text className="text-lg font-semibold text-gray-800 mb-4">Welcome to LearnTech</Text>
        <Text className="text-base text-gray-600 leading-6 mb-3">
          LearnTech is your comprehensive platform for learning technology skills through interactive roadmaps, expert guidance, and blogs.
        </Text>
        <Text className="text-base text-gray-600 leading-6">
          Whether you're a beginner or advanced learner, our curated content helps you master in-demand tech skills at your own pace.
        </Text>
      </View>
      
      {/* Features */}
      <View className="px-8 py-4 flex-row justify-around">
        <View className="items-center">
          <View className="w-16 h-16 bg-blue-100 rounded-full items-center justify-center mb-2">
            <Text className="text-blue-600 text-xl font-bold">20+</Text>
          </View>
          <Text className="text-gray-800 font-medium">Roadmaps</Text>
        </View>
        
        <View className="items-center">
          <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center mb-2">
            <Text className="text-green-600 text-xl font-bold">50K+</Text>
          </View>
          <Text className="text-gray-800 font-medium">Students</Text>
        </View>
        
        <View className="items-center">
          <View className="w-16 h-16 bg-purple-100 rounded-full items-center justify-center mb-2">
            <Text className="text-purple-600 text-xl font-bold">24/7</Text>
          </View>
          <Text className="text-gray-800 font-medium">Support</Text>
        </View>
      </View>
      
      {/* Button Section */}
      <View className="px-8 mt-auto mb-12">
        <TouchableOpacity 
          className="bg-blue-600 py-4 rounded-lg items-center mb-4"
          onPress={() => navigation.navigate('Login')}
        >
          <Text className="text-white font-bold text-lg">Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="bg-white border border-blue-600 py-4 rounded-lg items-center"
          onPress={() => navigation.navigate('Register')}
        >
          <Text className="text-blue-600 font-bold text-lg">Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home