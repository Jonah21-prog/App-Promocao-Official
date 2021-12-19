import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import SearchBar from "../Components/SearchBar";

export default function Home({ navigation }) {
  return (
    <View>
      <SearchBar h3>Home</SearchBar>
    </View>
  );
}
