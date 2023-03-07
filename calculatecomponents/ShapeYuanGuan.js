import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

const ShapeYuanGuan = ({ infomaterial }) => {
  const [outdiameter, setOutdiameter] = React.useState(null);
  const [indiameter, setIndiameter] = React.useState(null);
  const [height, setHeight] = React.useState(null);
  const [weight, setWeight] = React.useState(null);
  const [price, setPrice] = React.useState(null);

  // console.log("===length" , length)
  // console.log("===width" , width)
  // console.log("===height" , height)
  console.log("===infomaterial", infomaterial);

  let volume = null;
  if (outdiameter !== "" && height !== "" && indiameter !== "") {
    volume =
      Math.PI * (Number(outdiameter) / 2) ** 2 * height -
      Math.PI * (Number(indiameter) / 2) ** 2 * height;
    console.log("===volume", volume);
  }

  function sendAllInfo() {
    if (volume === null || volume === 0 || volume === "") {
      alert("请填写正确尺寸");
    } else if (infomaterial.type === "") {
      alert("请正确选择材料类型");
    } else if (infomaterial.density === "" || isNaN(Number(infomaterial.density))) {
      alert("请检查材料密度");
    } else if (infomaterial.unitPrice === "" || isNaN(Number(infomaterial.unitPrice)) || Number(infomaterial.unitPrice) === 0) {
      alert("请检查材料单价");
    } 
     else if (outdiameter <= indiameter) {
      alert("外径不能小于等于内径");
    }
    else {
      alert("计算成功");

      setWeight((0.001*Number(volume) * Number(infomaterial.density)).toFixed(5));
      setPrice((
        0.001 * Number(volume) * Number(infomaterial.density) * Number(infomaterial.unitPrice)
      ).toFixed(4));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.text}>圆管外径 cm ： </Text>
        <TextInput
          placeholder="输入外径"
          onChangeText={(text) => setOutdiameter(text)}
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.text}>圆管内径 cm ： </Text>
        <TextInput
          placeholder="输入内径"
          onChangeText={(text) => setIndiameter(text)}
        />
      </View>

      <View style={styles.input}>
        {/* all height is 长度 */}
        <Text style={styles.text}>圆管长度 cm ： </Text>
        <TextInput
          placeholder="输入长度"
          onChangeText={(text) => setHeight(text)}
        />
      </View>
      <Button style={{ marginTop: 10 }}
      title="计算" onPress={sendAllInfo} />

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

export default ShapeYuanGuan;
