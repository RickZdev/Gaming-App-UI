import React from 'react'
import { Image, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, View } from 'react-native'
import { ChevronDownIcon, EyeIcon, HeartIcon } from 'react-native-heroicons/solid'

import { H1, H3, H4, H5 } from '../components/HeadingsComp'
import COLORS from '../global/COLORS'

const LiveScreen = ({ navigation }) => {

  const viewers = [
    {
      id: 1,
      icon: require('../assets/images/avatar-7.png'),
      name: 'Piyush',
      color: 'text-secondary-6',
      comment: 'Enjoying the stream so far'
    },
    {
      id: 2,
      icon: require('../assets/images/avatar-8.png'),
      name: 'Jagjit',
      color: 'text-secondary-4',
      comment: 'Look at that!'
    },
    {
      id: 3,
      icon: require('../assets/images/avatar-9.png'),
      name: 'Pradeep',
      color: 'text-secondary-5',
      comment: 'You are so good in this game'
    },
    {
      id: 4,
      icon: require('../assets/images/avatar-10.png'),
      name: 'Gunnagyam',
      color: 'text-secondary-4',
      comment: 'They were trying to kill you'
    },
    {
      id: 5,
      icon: require('../assets/images/avatar-11.png'),
      name: 'Sumit',
      color: 'text-secondary-5',
      comment: "I hope you don't die"
    },
    {
      id: 6,
      icon: require('../assets/images/avatar-5.png'),
      name: 'Sumit',
      color: 'text-primary',
      comment: "Good job!"
    },
  ]

  return (
    <View className='flex-1 bg-black'>
      <View className='bg-black'>
        <View className='absolute z-50 flex-row w-full justify-between px-6 pt-6'>
          <ChevronDownIcon color={COLORS.white} size={32} onPress={() => navigation.goBack()} />
          <View className='flex-row space-x-3'>
            <View className='bg-[#EB5757] py-1.5 px-3 rounded-xl items-center justify-center'>
              <H5 classNameStyle={'text-white'}>LIVE</H5>
            </View>
            <View className='bg-gray-500 flex-row items-center py-2 px-3 rounded-xl'>
              <EyeIcon color={COLORS.white} size={22} />
              <H5 classNameStyle={'text-white ml-1'}>124.5K</H5>
            </View>
          </View>
        </View>
        <Image
          source={require('../assets/images/stream.png')}
          resizeMode='stretch'
          style={{ height: 250 }}
        />
        <Image
          source={require('../assets/images/streamer.png')}
          resizeMode='cover'
          className='absolute bottom-0'
        />
      </View>

      <View className='flex-row justify-around py-4'>
        <View className=''>
          <H1 classNameStyle={'text-white text-xl'}>Krish</H1>
          <H5 classNameStyle={'text-primary font-poppins-medium'}>Streaming Now <H5 classNameStyle={'text-gray-400 font-poppins-regular'}> - Dota2</H5></H5>
        </View>
        <View className='flex-row items-center space-x-3'>
          <HeartIcon color='#EB5757' size={22} />
          <TouchableOpacity className='bg-primary py-2.5 px-5 rounded-xl'>
            <H5 classNameStyle={'text-black'}>Following</H5>
          </TouchableOpacity>
        </View>
      </View>
      <View className='flex-1 bg-[#1E1D1A] rounded-3xl'>
        <ScrollView className='p-6'>
          <H3 classNameStyle='text-white mb-3'>Comments</H3>
          {viewers.map(item => (
            <View key={item.id} className={`flex-row space-x-5 items-center mb-3 ${item.id === 6 && "mb-8"}`}>
              <Image
                source={item.icon}
                resizeMode='cover'
              />
              <H4 classNameStyle={`${item.color} ml-4`}>{item.name}</H4>
              <H5 classNameStyle={'font-poppins-regular text-secondary-0 ml-3'}>{item.comment}</H5>
            </View>
          ))}
        </ScrollView>
        <Image
          source={require('../assets/images/live-filter.png')}
          resizeMode='cover'
          style={{ height: 90 }}
          className='border absolute bottom-0 -z-50'
        />
        <KeyboardAvoidingView className=' justify-center px-6 my-5 '>
          <TextInput className='font-poppins-medium text-sm border border-primary rounded-3xl items-center py-4 px-4 text-white' placeholder='Say something...' placeholderTextColor={COLORS.primary} keyboardType='visible-password' />
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}

export default LiveScreen