import { View, Text, StyleSheet, TextInput} from 'react-native'
import React, { useEffect } from 'react'
import Density from '../datacomponents/Density'


const MaterialDensity = ({infosavedensity, typename}) => {
    const [density, setDensity] = React.useState("");
    
    console.log("===MaterialDensity TYPE NAME =====" , typename.type)
    
    useEffect(() => {
        console.log("===MaterialDensity TYPE NAME =====" , typename.type)
        if (typename.type === "钢材") {
            setDensity(Density.gangcai)
            console.log("test1", Density.gangcai)
            infosavedensity(Density.gangcai)
        } else if (typename.type === "铝材") {
            setDensity(Density.lvcai)
            console.log("test2", Density.lvcai)
            infosavedensity(Density.lvcai)
        } else if (typename.type === "铜材") {
            setDensity(Density.tongcai)
            console.log("test3", Density.tongcai)
            infosavedensity(Density.tongcai)
        } else if (typename.type === "不锈钢") {
            setDensity(Density.buxiugang)
            console.log("test4", Density.buxiugang)
            infosavedensity(Density.buxiugang)
        } else if (typename.type === "碳材") {
            setDensity(Density.tancai)
            console.log("test5", Density.tancai)
            infosavedensity(Density.tancai)
        } else if (typename.type === "碳钢") {
            setDensity(Density.taigang)
            console.log("test6", Density.taigang)
            infosavedensity(Density.taigang)
        }
        else {
            setDensity("")
        }

      }, [typename.type]);


    

  return (
    <View style={styles.inputcontainer}>
      <Text>材料密度-单位 g/cm^3：</Text>
      <View style={styles.input}>
        {/* <MyTextInput
          placeholder="输入密度"
          onChangeText={(newtext) => {
            renderinfosavedensity(newtext);
            setText(newtext)
          }}
        /> */}
        <TextInput
          value={String(density)}
          onChangeText={(text) => {
                          setDensity(text)
                          infosavedensity(text)
          }}
        />


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputcontainer: {
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 10,
      marginTop: 10,
      marginLeft: 50,
      marginRight: 50,
      borderRadius: 10,
      height: 50,
      width: 300,
      backgroundColor: "lightgreen",
      flexDirection: "row",
    },
    input: {
      fontWeight: "bold",
      backgroundColor: "white",
      borderRadius: 5,
      height: 30,
      width: 100,
    },
  });

export default MaterialDensity