import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import SearchBar from "../Components/SearchBar";
import styles from "../Styles/MainStyles";

export default function Home({ navigation }) {
  return (
    <View style={specificStyle.specificContainer}>
      <View style={specificStyle.header}>
        <SearchBar />
      </View>

      <View style={specificStyle.content}>
        <Text h4>Home</Text>
        <TouchableOpacity
          style={specificStyle.button}
          onPress={() => alert("Clicado")}
        >
          <Text>Botão</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
  },

  header: {
    width: "100%",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "red",
    width: 200,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
});
