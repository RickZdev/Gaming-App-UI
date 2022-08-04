import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTab from './BottomTab';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerType: 'front',
        drawerLabelStyle: { marginLeft: -20 },
        drawerActiveBackgroundColor: "red",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen name="HomeDrawer" component={BottomTab} options={{ drawerItemStyle: { display: 'none' } }} />
    </Drawer.Navigator>
  )
}

export default MenuDrawer

const styles = StyleSheet.create({})