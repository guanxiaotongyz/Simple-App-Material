import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const TitleText = () => {
  return (
    <View style={styles.titlecontainer} >
      <Text style={styles.title}>材料计算</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titlecontainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        marginTop: 80,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 10,
        backgroundColor: "lightblue",
    }, 
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    }

})




export default TitleText