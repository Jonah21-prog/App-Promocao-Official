import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-elements";
import SearchBar from "../Components/SearchBar";
import styles from "../Styles/MainStyles";



export default function Home({ navigation }) {
  return (
    <View >
      <SearchBar></SearchBar>

      <Text h4>Lanches</Text>
      
    </View>


  );
}
