import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import BottomTab from '../navigations/BottomTab'

const OnSplashScreen = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <BottomTab />
  )
}

export default OnSplashScreen