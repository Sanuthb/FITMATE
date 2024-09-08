import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../Utils/colors'
import { useNavigation } from '@react-navigation/native'

export default function Splashscreen() {
    const navigation =useNavigation()

    setTimeout(() => {
        navigation.replace('Onboard')
    },3000)

  return (
    <SafeAreaView style={styles.container}>
      <Text>FITMATE</Text>
      <ActivityIndicator size={"large"} color={colors.PRIMARY}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
        backgroundColor: colors.color3,
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:40,
    },
})