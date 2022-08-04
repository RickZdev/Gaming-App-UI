import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

import COLORS from '../global/COLORS'
import { SearchIcon } from "react-native-heroicons/solid";
import { H1, H2, H3, H4, H5 } from '../components/HeadingsComp'


const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-black pt-4">
        <View className="flex-row justify-between items-center px-6 mb-4">
          <H2 classNameStyle={"text-white"}>Watch Live</H2>
          <Image
            className="w-10 h-10"
            source={require('../assets/images/Avatar.png')}
            resizeMode="cover"
          />
        </View>
        <View className="px-6 justify-center">
          <SearchIcon size={24} color={COLORS.secondary[1]} style={{ position: 'absolute', left: 40 }} />
          <TextInput className="py-4 pl-12 pr-5 border border-white rounded-3xl text-sm font-poppins-regular text-white" placeholder='Search live channels or streamers' placeholderTextColor={COLORS.secondary[1]} >
          </TextInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen