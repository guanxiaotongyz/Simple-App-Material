import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";

const MaterialShape = ({infosaveshape}) => {
  const data = ["板材", "圆棒", "圆管", "其他"];

  return (
    <View style={styles.inputcontainer}>
      <Text>材料形状： </Text>
      <SelectDropdown
        data={data}
        defaultButtonText="请选择"
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        infosaveshape(selectedItem);

        }}
        buttonStyle={styles.input}
        buttonTextStyle={{ color: "black" }}
        rowStyle={{ backgroundColor: "white" , borderRadius: 5, }}
        rowTextStyle={{ color: "black" }}
        dropdownStyle={{ backgroundColor: "white", borderRadius: 10, }}
      />
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

export default MaterialShape;
