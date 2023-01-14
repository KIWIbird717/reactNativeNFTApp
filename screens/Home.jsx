import { View, SafeAreaView, FlatList, Text } from 'react-native'
import { useState } from 'react'

import { COLORS, NFTData } from "../constants"
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

export const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar theme="auto"/>
    </SafeAreaView>
  )
}
