import React from 'react'
import { Text } from 'react-native'

const H1 = ({ classNameStyle, children }) => {
  return (
    <Text className={`font-poppins-semibold text-2xl ${classNameStyle}`} numberOfLines={1}>{children}</Text>
  )
}

const H2 = ({ classNameStyle, children }) => {
  return (
    <Text className={`font-poppins-semibold text-xl ${classNameStyle}`} numberOfLines={1}>{children}</Text>
  )
}

const H3 = ({ classNameStyle, children }) => {
  return (
    <Text className={`font-poppins-semibold text-base ${classNameStyle}`} numberOfLines={1}>{children}</Text>
  )
}

const H4 = ({ classNameStyle, children }) => {
  return (
    <Text className={`font-poppins-semibold text-sm ${classNameStyle}`} numberOfLines={1}>{children}</Text>
  )
}

const H5 = ({ classNameStyle, children }) => {
  return (
    <Text className={`font-poppins-medium text-xs ${classNameStyle}`} numberOfLines={1}>{children}</Text>
  )
}

export { H1, H2, H3, H4, H5 }