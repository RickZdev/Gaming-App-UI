import 'react-native-gesture-handler'
import React from 'react';

import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import BottomTab from './src/navigations/BottomTab';
import MenuDrawer from './src/navigations/MenuDrawer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <MenuDrawer />
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;
