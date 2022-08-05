import React from 'react'
import { FlatList, Image, ImageBackground, TouchableOpacity, } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { H5 } from './HeadingsComp'

const CategoryList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => <CategoryCard data={item} index={index} />}
      horizontal={true}
      className='my-8'
      showsHorizontalScrollIndicator={false}
    />
  )
}

const CategoryCard = ({ data, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className={`mr-4 overflow-hidden ${index === 0 ? "ml-4" : "ml-0"} items-center`} onPress={() => navigation.navigate('CategoryScreen', data)}>
      <ImageBackground
        source={data.image}
        resizeMode='cover'
        style={{ justifyContent: 'center', alignItems: 'center', padding: 14, overflow: 'hidden' }}
      >
        <Image
          source={data.icon}
          resizeMode='contain'
        />
      </ImageBackground>
      <H5 classNameStyle='text-[#F4F3FC] text-ellipsis mt-2 w-14'>{data.name}</H5>
    </TouchableOpacity>
  )
}

export default CategoryList