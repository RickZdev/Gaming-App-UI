import React from 'react'
import { Image, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon, EyeIcon, HeartIcon, UserIcon } from 'react-native-heroicons/solid'

import { H2, H3, H4, H5 } from '../components/HeadingsComp'

const CategoryScreen = ({ route, navigation }) => {
  const liveData = [
    {
      id: '1',
      name: 'Game Pro Title Match',
      views: '78.4K Viewers',
      username: 'Rishab',
      icon: require('../assets/images/avatar-5.png'),
      cover: require('../assets/images/live-1.png')
    },
    {
      id: '2',
      name: 'Game Tournament Match',
      views: '23.5K Viewers',
      username: 'Ravi',
      icon: require('../assets/images/avatar-2.png'),
      cover: require('../assets/images/live-3.png')
    },
    {
      id: '3',
      name: 'World Tournament Cup',
      views: '20.5K Viewers',
      username: 'Agnes',
      icon: require('../assets/images/avatar-6.png'),
      cover: require('../assets/images/live-4.png')
    },
    {
      id: '4',
      name: 'World Tournament Cup',
      views: '20.5K Viewers',
      username: 'Agnes',
      icon: require('../assets/images/avatar-3.png'),
      cover: require('../assets/images/live-2.png')
    },
  ]

  return (
    <SafeAreaView className='flex-1 bg-black'>
      <ImageBackground
        source={route.params.cover}
        resizeMode='cover'
        className='w-full h-full flex-1'
      >
        <View className='flex-row items-center justify-between px-6 py-4'>
          <ChevronLeftIcon color='white' size={32} onPress={() => navigation.goBack()} />
          <TouchableOpacity className='bg-secondary-1 justify-center items-center w-8 h-8 rounded-full'>
            <HeartIcon color='white' style={{ width: 19, height: 19 }} />
          </TouchableOpacity>
        </View>
        <View className='absolute bottom-0 z-20 w-full'>
          <View className='flex-row justify-between items-center px-6' >
            <H2 classNameStyle='text-white text-3xl font-proxima-extrabold'>FORTNITE</H2>
            <TouchableOpacity className='bg-primary py-2 px-4 rounded-xl'>
              <H4 classNameStyle={'text-black'}>Following</H4>
            </TouchableOpacity>
          </View>
          <View className='flex-row px-6 my-4 justify-between'>
            <View className='flex-row items-center'>
              <UserIcon color={'white'} size={16} />
              <H3 classNameStyle='text-primary ml-2'>7.2M</H3>
              <H4 classNameStyle='text-white font-poppins-medium ml-2'>followers</H4>
            </View>
            <View className='flex-row items-center'>
              <EyeIcon color={'white'} size={16} />
              <H3 classNameStyle='text-primary ml-2'>534.8K</H3>
              <H4 classNameStyle='text-white font-poppins-medium ml-2'>viewers</H4>
            </View>
          </View>
        </View>
        <Image
          source={require('../assets/images/filter.png')}
          resizeMode='cover'
          className='bottom-0 absolute' />
      </ImageBackground>
      <View className='flex-1 pb-2'>
        <ScrollView className='bg-[#1E1D1A] rounded-3xl px-6 py-6 pb-10' showsVerticalScrollIndicator={false}>
          <H4 classNameStyle='text-white mb-4'>Live Channels</H4>
          {liveData.map((item, index) => (
            <View key={index} className={`flex-row items-center mb-4 space-x-4 ${index === 3 ? "mb-10" : null}`}>
              <View>
                <View className='absolute z-10 bg-[#EB5757] py-2 px-3 rounded-xl mt-3 ml-3'>
                  <H5 classNameStyle={'text-white'}>LIVE</H5>
                </View>
                <Image
                  source={item.cover}
                  resizeMode='cover'
                  style={{ width: 160, height: 100, borderRadius: 10 }}
                />
              </View>
              <View className='space-y-2 w-32'>
                <H4 classNameStyle={'text-white'}>{item.name}</H4>
                <View className='flex-row items-center'>
                  <EyeIcon color={'white'} size={16} />
                  <H4 classNameStyle='font-poppins-regular text-gray-400 ml-2'>{item.views}</H4>
                </View>
                <View className='flex-row items-end '>
                  <Image
                    source={item.icon}
                    resizeMode='cover'
                    style={{ width: 32, height: 32 }}
                  />
                  <H4 classNameStyle={'font-poppins-medium text-white ml-2'}>{item.username}</H4>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView >
  )
}

export default CategoryScreen