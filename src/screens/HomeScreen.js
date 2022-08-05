import React from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, TextInput, TouchableOpacity, View } from 'react-native'
import { SearchIcon } from "react-native-heroicons/solid";

import { H2, H5 } from '../components/HeadingsComp'
import COLORS from '../global/COLORS'
import LiveList from '../components/LiveList';
import CategoryList from '../components/CategoryList';

const HomeScreen = ({ navigation }) => {
  StatusBar.setBackgroundColor(COLORS.black)
  StatusBar.setBarStyle('light-content')

  const liveData1 = [
    {
      id: '1',
      image: require('../assets/images/live-1.png'),
      views: '8.1K'
    },
    {
      id: '2',
      image: require('../assets/images/live-2.png'),
      views: '10.5K'
    },
    {
      id: '3',
      image: require('../assets/images/live-1.png'),
      views: '2.41K'
    },
  ]

  const categoryData = [
    {
      id: '1',
      name: 'Overwatch',
      image: require('../assets/images/overwatch.png'),
      icon: require('../assets/images/overwatch-icon.png'),
      cover: require('../assets/images/fortnite-cover.png')
    },
    {
      id: '2',
      image: require('../assets/images/dota.png'),
      icon: require('../assets/images/dota-icon.png'),
      name: 'DOTA 2',
      cover: require('../assets/images/fortnite-cover.png')
    },
    {
      id: '3',
      image: require('../assets/images/lol.png'),
      icon: require('../assets/images/lol-icon.png'),
      cover: require('../assets/images/fortnite-cover.png'),
      name: 'League of Legend'
    },
    {
      id: '4',
      image: require('../assets/images/apex.png'),
      icon: require('../assets/images/apex-icon.png'),
      cover: require('../assets/images/fortnite-cover.png'),
      name: 'Apex Legend'
    },
    {
      id: '5',
      image: require('../assets/images/valorant.png'),
      icon: require('../assets/images/valorant-icon.png'),
      cover: require('../assets/images/fortnite-cover.png'),
      name: 'Valorant'
    },
  ]

  return (
    <>
      <View className="flex-row bg-black justify-between items-center px-6 py-4 border-b border-white" >
        <H2 classNameStyle={"text-white"}>Watch Live</H2>
        <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
          <Image
            className="w-10 h-10"
            source={require('../assets/images/Avatar.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <ScrollView className="bg-black">
        <SafeAreaView className=" flex-1 bg-black pt-4 pb-4">
          <View className="px-6 mb-8 justify-center">
            <SearchIcon size={24} color={COLORS.secondary[1]} style={{ position: 'absolute', left: 40 }} />
            <TextInput className="py-4 pl-12 pr-5 border border-white rounded-3xl text-sm font-poppins-regular text-white" placeholder='Search live channels or streamers' placeholderTextColor={COLORS.secondary[1]} />
          </View>
          <LiveList data={liveData1} />
          <CategoryList data={categoryData} />
          <View className='flex-row items-center justify-between px-6 mb-4'>
            <H2 classNameStyle={'text-white'}>Top streamers Live</H2>
            <View>
              <H5 classNameStyle={'text-primary'}>View all</H5>
            </View>
          </View>
          <LiveList data={liveData1} />
        </SafeAreaView>
      </ScrollView>
    </>
  )
}

export default HomeScreen