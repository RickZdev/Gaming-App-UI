import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Text className="font-poppins-medium">Medium</Text>
      <Text className="font-poppins-semibold"> Semi Bold</Text>
      <Text className="font-proxima-extrabold">Proxima</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})