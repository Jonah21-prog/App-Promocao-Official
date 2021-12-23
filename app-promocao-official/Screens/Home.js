import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import SearchBar from "../Components/SearchBar";
import styles from "../Styles/MainStyles";

export default function Home({ navigation }) {

  const lanche = () => {
    navigation.push("ItemPromocao");
  };
  
  return (
    <View style={specificStyle.specificContainer}>
      <View style={styles.top}>
        <View style={specificStyle.header}>
          <SearchBar />

          <View style={styles.border}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Clicado")}
            >
              <Image
                source={require('../assets/IceCream.png')}

              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Clicado")}
            >
              <Image
                source={require('../assets/Cake.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Clicado")}
            >
              <Image
                source={require('../assets/Lunch.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Clicado")}
            >
              <Image
                source={require('../assets/Mercado.png')}
              />
            </TouchableOpacity>

          </View>
        </View>
      </View>      
      
      <Text h4>Lanches</Text>
      <View style={specificStyle.content}>
        
        <TouchableOpacity
        style={styles.precoContainer}
        >
          <Image
            style={styles.oferta}
            source={
              require('../assets/exemplolanche1.png')
            }
          >

          </Image>
          <Text style={styles.preco}>
            {"22.99"}
          </Text>
          <Text style={styles.promocao}>
            {"18.99"}
          </Text>
        </TouchableOpacity>

        
      </View>


    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#ff0",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 10
  },

  header: {
    width: "100%",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    borderColor: "#f0f",
    borderWidth: 4,
    flexDirection: 'row'
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
