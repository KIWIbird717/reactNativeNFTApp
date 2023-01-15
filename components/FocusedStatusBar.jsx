import { StatusBar, Platform, View, SafeAreaView } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


import { COLORS } from '../constants'


export const FocusedStatusBar = ({ backgroundColor, barStyle }) => {
  const IosStatusBar = () => {
    const insets = useSafeAreaInsets()

    return (
      <SafeAreaView style={{ height: insets.top / 100, backgroundColor: backgroundColor }}>
        <StatusBar translucent={true} barStyle={barStyle} animated={true} />
      </SafeAreaView>
    )
  }
  
  const AndroidStatusBar = () => {
    return <StatusBar translucent={true} barStyle={barStyle} backgroundColor={backgroundColor} animated={true}/>
  }

  const isFocused = useIsFocused()

  if (isFocused) {
    return Platform.OS === 'ios' ? <IosStatusBar /> : <AndroidStatusBar />;
  } else {
    return null
  }
}
