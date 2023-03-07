import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

const ShapeBanCai = ({ infomaterial }) => {
  const [length, setLength] = React.useState("");
  const [width, setWidth] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [price, setPrice] = React.useState("");

  // console.log("===length" , length)
  // console.log("===width" , width)
  // console.log("===height" , height)
  console.log("===infomaterial", infomaterial);

  let volume = null;
  if (length !== "" && width !== "" && height !== "") {
    volume = Number(length) * Number(width) * Number(height);
    console.log("===volume", volume);
  }

  function sendAllInfo() {
    if (volume === null || volume === 0 || volume === "") {
      alert("请填写正确尺寸");
    } else if (infomaterial.type === "") {
      alert("请正确选择材料类型");
    } else if (
      infomaterial.density === "" ||
      isNaN(Number(infomaterial.density))
    ) {
      alert("请检查材料密度");
    } else if (
      infomaterial.unitPrice === "" ||
      isNaN(Number(infomaterial.unitPrice))
    ) {
      alert("请检查材料单价");
    } else {
      alert("计算成功");
      setWeight(
        (0.001 * Number(volume) * Number(infomaterial.density)).toFixed(5)
      );
      setPrice(
        (
          0.001 *
          Number(volume) *
          infomaterial.density *
          Number(infomaterial.unitPrice)
        ).toFixed(4)
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.text}>板材长度 cm ： </Text>
        <TextInput
          placeholder="输入长度"
          onChangeText={(text) => setLength(text)}
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.text}>板材宽度 cm ： </Text>
        <TextInput
          placeholder="输入宽度"
          onChangeText={(text) => setWidth(text)}
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.text}>板材厚度 cm ： </Text>
        <TextInput
          placeholder="输入厚度"
          onChangeText={(text) => setHeight(text)}
        />
      </View>

      <Button title="计算" onPress={sendAllInfo} />
      <Text style={styles.keytext}>重量 kg: {weight}</Text>
      <Text style={styles.keytext}>价格 ¥: {price} </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    padding: 10,
    marginTop: 9,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    backgroundColor: "lightgrey",
  },
  input: {
    fontWeight: "bold",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  keytext: {
    marginLeft: 10,
    fontSize: 19,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
  },
});

export default ShapeBanCai;
