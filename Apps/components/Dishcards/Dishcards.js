import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../Utils/colors'

const Dishcards = ({dishname,image,protein,carbs,fats,calories}) => {
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image}/>
      <View style={styles.box}>
        <Text style={{color:colors.PRIMARY,fontSize:20}}>{dishname}</Text>
        <Text style={{color:colors.color1,fontSize:20}}>{calories} kacl</Text>
        <Text style={{color:colors.color2,fontSize:13}}>Pro:{protein} Fats:{fats} Carbs:{carbs}</Text>
      </View>
    </View>
  )
}

export default Dishcards

const styles = StyleSheet.create({
    container:{
      width:350,
      height:270,
      backgroundColor:colors.color4,
      display:'flex',
      alignItems:'baseline',
      gap:10,
      borderRadius:10,
      margin:10
    },
    image:{
        width:'100%',
        height:150,
        objectFit:'cover',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    box:{
        width:'100%',
        padding:5,

    }
})