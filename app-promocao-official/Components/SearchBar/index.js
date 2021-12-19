import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { StyleSheet, TextInput } from "react-native";

export default function SearchBar({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Buscar" style={styles.searchBarcontainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
  },
  searchBarcontainer: {
    padding: 8,
    height: 48,
    width: "90%",
    borderWidth: 2,
    borderRadius: 8,
  },
});
