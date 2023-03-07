import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const MaterialUnitPrice = ({infosaveUnitPrice}) => {
    const [text, setText] = React.useState("");

    function renderinfosave(text) {
        infosaveUnitPrice(text);
    }

  return (
    <View style={styles.inputcontainer}>
      <Text>材料单价 kg / 元：</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="输入单价"
          onChangeText={(text) => {
            setText(text);
            renderinfosave(text);
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

export default MaterialUnitPrice