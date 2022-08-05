import React from 'react'
import { View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import { ChevronLeftIcon, CogIcon } from 'react-native-heroicons/solid'

import { H1, H3, H4, H5 } from '../components/HeadingsComp'

const AccountScreen = ({ navigation }) => {

  const teamData = [
    {
      id: 1,
      image: require('../assets/images/avatar-1.png')
    },
    {
      id: 2,
      image: require('../assets/images/avatar-2.png')
    },
    {
      id: 3,
      image: require('../assets/images/avatar-3.png')
    },
    {
      id: 4,
      image: require('../assets/images/avatar-4.png')
    },
    {
      id: 5,
      image: require('../assets/images/avatar-5.png')
    },
    {
      id: 6,
      image: require('../assets/images/avatar-6.png')
    },
  ]

  const games = [
    {
      id: 1,
      image: require('../assets/images/cod.png'),
    },
    {
      id: 2,
      image: require('../assets/images/fortnite-game.png'),
    },
    {
      id: 3,
      image: require('../assets/images/dota-game.png'),
    },
    {
      id: 4,
      image: require('../assets/images/gta-game.png'),
    },
  ]

  return (
    <View className='flex-1 bg-black'>
      <View className='flex-1 bg-black h-1/2'>
        <View className='flex-row items-center justify-between px-6 py-4'>
          <ChevronLeftIcon color='white' size={32} onPress={() => navigation.goBack()} />
          <CogIcon color='white' style={{ width: 19, height: 19 }} />
        </View>
        <View className='justify-center flex-row items-center'>
          <Image
            source={require('../assets/images/Avatar.png')}
            resizeMode='cover'
          />
        </View>
        <View className='flex-row justify-center items-center space-x-4 mt-4'>
          <TouchableOpacity className='py-2 px-3 rounded-xl bg-gray-600 flex-row items-center'>
            <View className='w-2 h-2 border rounded-full bg-green-400 mr-1' />
            <H5 classNameStyle={'text-white font-poppins-medium'}>Online</H5>
          </TouchableOpacity>
          <TouchableOpacity className='py-2 px-3 rounded-xl bg-primary'>
            <H5 classNameStyle={'text-black font-poppins-semibold'}>LV. 78</H5>
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-center items-center mt-4'>
          <H1 classNameStyle={'text-white font-proxima-extrabold text-4xl'}>SHAZTHEANIMATOR</H1>
        </View>
        <View className='flex-row justify-center items-center space-x-12 mt-4'>
          <View className=''>
            <H1 classNameStyle={'text-2xl text-primary text-center'}>38</H1>
            <H5 classNameStyle={'font-poppins-medium text-white'}>Streams</H5>
          </View>
          <View>
            <H1 classNameStyle={'text-2xl text-primary text-center'}>87.8K</H1>
            <H5 classNameStyle={'font-poppins-medium text-white'}>Followers</H5>
          </View>
          <View>
            <H1 classNameStyle={'text-2xl text-primary text-center'}>526</H1>
            <H5 classNameStyle={'font-poppins-medium text-white'}>Following</H5>
          </View>
        </View>
        <Image
          source={require('../assets/images/account-filter.png')}
          resizeMode='cover'
          className='absolute -bottom-12 -z-10'
        />
      </View>
      <View className='flex-1 h-1/2 rounded-3xl bg-[#1E1D1A] py-3 px-6' >
        <View className='flex-row justify-evenly items-center'>
          <View className='border border-primary py-3 px-6 rounded-2xl'>
            <H3 classNameStyle={'text-primary'}>Games</H3>
          </View>
          <View className='border border-[#1E1D1A] py-3 px-6 rounded-2xl'>
            <H3 classNameStyle={'text-gray-400'}>Post</H3>
          </View>
          <View className='border border-[#1E1D1A] py-3 px-6 rounded-2xl'>
            <H3 classNameStyle={'text-gray-400'}>About</H3>
          </View>
        </View>
        <View className='flex-row mt-2'>
          <FlatList
            data={games}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Image
                source={item.image}
                resizeMode='cover'
                className='mr-4'
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View className='mt-4'>
          <H4 classNameStyle={'text-white'}>Achievement  <H4 classNameStyle={'text-primary'}>(2)</H4></H4>
          <View className='flex-row mt-2 space-x-4'>
            <Image
              source={require('../assets/images/badge-1.png')}
              resizeMode='cover'
            />
            <Image
              source={require('../assets/images/badge-2.png')}
              resizeMode='cover'
            />
          </View>
        </View>
        <View className='mt-4'>
          <H4 classNameStyle={'text-white'}>Team  <H4 classNameStyle={'text-primary'}>(6)</H4></H4>
          <ScrollView className='flex-row mt-2 space-x-4' horizontal showsHorizontalScrollIndicator={false}>
            {teamData.map(item => (
              <Image
                source={item.image}
                resizeMode='cover'
                className='w-12 h-12'
                key={item.id}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default AccountScreen