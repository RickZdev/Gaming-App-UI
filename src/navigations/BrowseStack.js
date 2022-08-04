import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BrowseScreen from '../screens/BrowseScreen';

const Stack = createNativeStackNavigator();
const BrowseStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BrowseScreen" component={BrowseScreen} />
    </Stack.Navigator>
  )
}

export default BrowseStack

const styles = StyleSheet.create({})