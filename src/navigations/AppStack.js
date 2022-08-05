import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTab from './BottomTab'
import CategoryScreen from '../screens/CategoryScreen'
import DiscoverScreen from '../screens/DiscoverScreen';
import BrowseScreen from '../screens/BrowseScreen';
import AccountScreen from '../screens/AccountScreen';
import LiveScreen from '../screens/LiveScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={BottomTab} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ presentation: 'transparentModal' }} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{ presentation: 'card' }} />
      <Stack.Screen name="LiveScreen" component={LiveScreen} options={{ presentation: 'modal' }} />
    </Stack.Navigator>
  )
}

const DiscoverStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
    </Stack.Navigator>
  )
}

const BrowseStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BrowseScreen" component={BrowseScreen} />
    </Stack.Navigator>
  )
}
export { HomeStack, DiscoverStack, BrowseStack }