import { Text } from 'react-native'
import React from 'react'

const H1 = ({ classNameStyle, children }) => {
  return (
    <Text className={`font-poppins-semibold text-2xl ${classNameStyle}`}>{children}</Text>
  )
}

const H2 = ({ classNameStyle, children }) => {
  return (
    <Text className={`font-poppins-semibold text-xl ${classNameStyle}`}>{children}</Text>
  )
}

const H3 = ({ classNameStyle, children }) => {
  return (
    <Text className={`font-poppins-semibold text-base ${classNameStyle}`}>{children}</Text>
  )
}

const H4 = ({ classNameStyle, children }) => {
  return (
    <Text className={`font-poppins-semibold text-sm ${classNameStyle}`}>{children}</Text>
  )
}

const H5 = ({ classNameStyle, children }) => {
  return (
    <Text className={`font-poppins-medium text-xs ${classNameStyle}`}>{children}</Text>
  )
}

export { H1, H2, H3, H4, H5 }