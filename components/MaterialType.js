import { View, Text, TextInput, StyleSheet } from "react-native";
import Type from "../datacomponents/Type";
import SelectDropdown from "react-native-select-dropdown";
import React from "react";


const MaterialType = ({ infosave }) => {
 
  // data from Type.js
  const data = Type;

  return (
    <View style={styles.inputcontainer}>
      <Text>材料种类：</Text>
      <View style={styles.input}>
        {/* <TextInput
          placeholder="请在这里输入内容"
          onChangeText={(newtext) => {
            setText(newtext);
            renderinfosave(newtext);
          }}
        /> */}
        <SelectDropdown
          data={data}
          defaultButtonText="请选择材料种类"
          onSelect={(selectedItem) => {
            console.log(selectedItem);
            infosave(selectedItem);
          }}
          buttonStyle={styles.input}
          buttonTextStyle={{ color: "black" }}
          rowStyle={{ backgroundColor: "white", borderRadius: 5 }}
          rowTextStyle={{ color: "black" }}
          dropdownStyle={{ backgroundColor: "white", borderRadius: 10 }}
        />

      </View>
    </View>
  );
};

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
    width: 200,
  },
});

export default MaterialType;
