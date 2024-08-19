import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'

const HomeScreen = () => {
  return (
    <View style = {styles.container}>
      <Image source={require("../assets/man.png")} style={styles.logo}/>
      <Text style = {styles.title}> Lorem ipsum dollar</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor: colors.white,
        alignItems :'center'
    },
    logo :{
        height :250,
        width :231,
        marginVertical : 30
    },
    title : {
        fontSize : 36
    }
})