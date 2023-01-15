import { View, Text, Image } from 'react-native'

import { SIZES, COLORS, SHADOWS, assets, FONTS } from '../constants'


export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary
      }}>
        {title}
      </Text>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLORS.primary
      }}>
        {subTitle}
      </Text>
    </View>
  )
}

export const SolPrice = ({ price }) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <Image style={{ width: 25, height: 25, marginRight: 5 }} source={assets.sol} resizeMode='contain'/>
      <Text style={{
        fontFamily: FONTS.bold,
        fontSize: SIZES.font,
        color: COLORS.primary
      }}>{price}</Text>
    </View>
  )
}

export const ImageCamp = ({ imgUrl, index }) => {
  return (
    <Image 
      source={imgUrl}
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  )
}

export const People = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {[assets.person04, assets.person02, assets.person03, assets.person04].map((imgUrl, index) => 
        <ImageCamp imgUrl={imgUrl} index={index} key={`People-${index}`} />
      )}
    </View>
  )
}

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%'
      }}
    >
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary
      }}>
        Ending in
      </Text>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary
      }}>
        12h 30m
      </Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={{
      width: "100%",
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: "row",
      justifyContent: 'space-between',
    }}>
      <People />
      <EndDate />
    </View>
  )
}
