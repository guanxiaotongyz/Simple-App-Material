import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import TitleText from "./components/TitleText";
import MaterialType from "./components/MaterialType";
import MaterialDensity from "./components/MaterialDensity";
import MaterialShape from "./components/MaterialShape";
import MaterialUnitPrice from "./components/MaterialUnitPrice";
import ShapeBanCai from "./calculatecomponents/ShapeBanCai";
import ShapeYuanBang from "./calculatecomponents/ShapeYuanBang";
import ShapeYuanGuan from "./calculatecomponents/ShapeYuanGuan";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [type, setType] = React.useState("NAN");
  const [density, setDensity] = React.useState("");
  const [shape, setShape] = React.useState("");
  const [unitPrice, setUnitPrice] = React.useState("");

  function renderType(text) {
    setType(text);
  }

  function renderDensity(text) {
    // console.log("===Density" , text)
    setDensity(text);
  }

  function renderShape(text) {
    // console.log("===Shape" , text)
    setShape(text);
  }

  function renderUnitPrice(text) {
    // console.log("===UnitPrice" , text)
    setUnitPrice(text);
  }

  console.log("===Type", type);
  // console.log("===Density", density);
  // console.log("===Shape", shape);
  // console.log("===UnitPrice", unitPrice);

  let screen = null;

  if (shape === "板材") {
    console.log("===板材===");
    screen = <ShapeBanCai infomaterial={{ type, density, shape, unitPrice }} />;
  } else if (shape === "圆棒") {
    console.log("===圆棒===");
    screen = (
      <ShapeYuanBang infomaterial={{ type, density, shape, unitPrice }} />
    );
  } else if (shape === "圆管") {
    screen = (
      <ShapeYuanGuan infomaterial={{ type, density, shape, unitPrice }} />
    );
    console.log("===圆管===");
  }

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["white", "lightblue"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        <TitleText />
        <MaterialType infosave={renderType} />
        <MaterialDensity infosavedensity={renderDensity} typename={{ type }} />
        <MaterialUnitPrice infosaveUnitPrice={renderUnitPrice} />
        <MaterialShape infosaveshape={renderShape} />
        {screen}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
