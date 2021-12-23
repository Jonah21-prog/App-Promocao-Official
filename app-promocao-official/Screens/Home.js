import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-elements";
import SearchBar from "../Components/SearchBar";
import styles from "../Styles/MainStyles";



export default function Home({ navigation }) {
  return (
    <View style={specificStyle.specificContainer}>
      <SearchBar></SearchBar>     

    </View>


  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    flex: 1,
    backgroundColor: '#c0bcb5',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: "solid"
  }

})

