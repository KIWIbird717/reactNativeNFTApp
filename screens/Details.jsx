import React from 'react'
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'

import { COLORS, FONTS, SHADOWS, assets, SIZES } from '../constants'
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components'


const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image 
        source={data.image}
        resizeMode='cover'
        style={{ width: '100%', height: '100%' }}
      />
      <CircleButton 
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 15}
      />
      <CircleButton 
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 15}
      />
    </View>
  )
}


export const Details = ({ route, navigation }) => {
  const { data } = route.params

  return (
    <>
      <FocusedStatusBar barStyle='dark-content' backgroundColor='transparent'/>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 1,
        }}>
          <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS}/>
        </View>

        <FlatList 
          data={data.bids}
          renderItem={({ item }) => <DetailsBid bid={item}/>}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: SIZES.extraLarge }}
          ListHeaderComponent={() => (
            <React.Fragment>
              <DetailsHeader data={data} navigation={navigation}/>
              <SubInfo />
              <View style={{ padding: SIZES.font }}>
                <DetailsDesc data={data}/>
                {data.bids.length > 0 && (
                  <Text style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary
                  }}>
                    Current Bits
                  </Text>
                )}
              </View>
            </React.Fragment>
          )}
          ListFooterComponent={() => <View style={{ marginTop: 60 }}/>}
        />
      </SafeAreaView>
    </>
  )
}
