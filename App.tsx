import './global.css'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

const App = () => {

  return (
    <SafeAreaView >
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View className="text-blue-400 text-lg" >
        <Text className="font-bold text-blue-500">LearnTech</Text>
      </View>
    </SafeAreaView>
  )
}

export default App