import React from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { EyeIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

import { H4 } from './HeadingsComp'
import COLORS from '../global/COLORS'

const LiveList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => <LiveCard data={item} index={index} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  )
}

const LiveCard = ({ data, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className={`mr-4 rounded-2xl overflow-hidden ${index === 0 ? "ml-4" : "ml-0"}`} onPress={() => navigation.navigate('LiveScreen')}>
      <Image
        source={data.image}
        resizeMode='cover'
      />
      <View className='absolute mt-4 ml-4 flex-row'>
        <View className="bg-[#EB5757] px-2.5 py-1 rounded-xl mr-2.5 items-center justify-center">
          <H4 classNameStyle="text-white">LIVE</H4>
        </View>
        <View className="bg-secondary-0 py-1 rounded-xl mr-2.5 flex-row justify-center items-center space-y-5 py-2 px-2.5">
          <EyeIcon size={15} color={COLORS.white} />
          <H4 classNameStyle="text-white pl-1">{data.views}</H4>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default LiveList