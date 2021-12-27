import React from "react";
import { View, Text, ScrollView } from "react-native";

import Promocao from "../Promocao";

export default function Promocoes() {
  return (
    <View style={{ backgroundColor: "#ff0" }}>
      <View>
        <Text style={{ fontSize: 25, paddingLeft: 7.5 }}>Lanches</Text>
        <ScrollView
          overScrollMode="never"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingRight: 7.5,
            paddingLeft: 7.5,

            flexGrow: 0,
            justifyContent: "space-between",

            flexDirection: "row",
            alignItems: "center",

            width: "auto",

            borderColor: "#0f0",
            borderWidth: 2,
          }}
        >
          <Promocao source={require("../../assets/exemplolanche1.png")} />
          <Promocao source={require("../../assets/exemplolanche2.png")} />
          <Promocao source={require("../../assets/exemplolanche1.png")} />
          <Promocao source={require("../../assets/exemplolanche1.png")} />
        </ScrollView>
      </View>
    </View>
  );
}
