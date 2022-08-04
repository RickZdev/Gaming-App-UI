import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DiscoverScreen from '../screens/DiscoverScreen';

const Stack = createNativeStackNavigator();
const DiscoverStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
    </Stack.Navigator>
  )
}

export default DiscoverStack

const styles = StyleSheet.create({})