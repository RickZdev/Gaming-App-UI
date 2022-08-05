import 'react-native-gesture-handler'
import React from 'react';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';

import { HomeStack } from './src/navigations/AppStack';

const App = () => {
  return (
    <NavigationContainer theme={{ colors: { background: 'black' } }}>
      <TailwindProvider>
        <HomeStack />
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default App;
