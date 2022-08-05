import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeartIcon } from "react-native-heroicons/solid";
import { DuplicateIcon, GlobeAltIcon } from "react-native-heroicons/outline";

import { BrowseStack, DiscoverStack } from './AppStack'
import COLORS from '../global/COLORS'
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: '#323233',
          borderWidth: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 89,
          paddingTop: 5
        },
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 10, fontFamily: 'Poppins-Medium', paddingBottom: 33 },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary[0],
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HeartIcon color={color} size={size} />
          ),
          tabBarLabel: "Following",
        }} />

      <Tab.Screen name="DiscoverTab" component={DiscoverStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <GlobeAltIcon color={color} size={size} />
          ),
          tabBarLabel: "Discover",
        }} />

      <Tab.Screen name="BrowseTab" component={BrowseStack}
        options={{
          tabBarLabel: "Browse",
          tabBarIcon: ({ color, size }) => (
            <DuplicateIcon color={color} size={size} />
          ),
          tabBarLabel: "Browse",
        }} />
    </Tab.Navigator>
  )
}

export default BottomTab