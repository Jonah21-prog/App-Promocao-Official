import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Text } from "react-native-elements";
import SearchBar from "../Components/SearchBar";
import Promocoes from "../Components/Promocoes";
import styles from "../Styles/MainStyles";
import Sobremesas from "../Components/Sobremesas";

export default function Home({ navigation }) {
  const lanche = () => {
    navigation.push("ItemPromocao");
  };

  return (
    <View style={specificStyle.specificContainer}>
      <View style={specificStyle.header}>
        <SearchBar />

        <View style={styles.border}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("Clicado")}
          >
            <Image source={require("../assets/IceCream.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("Clicado")}
          >
            <Image source={require("../assets/Cake.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("Clicado")}
          >
            <Image source={require("../assets/Lunch.png")} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("Clicado")}
          >
            <Image source={require("../assets/Mercado.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View>
          <Promocoes />
          <Sobremesas />
          <Promocoes />
          <Sobremesas />
          <Promocoes />
        </View>
      </ScrollView>
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    flex: 1,
    borderWidth: 1,
    borderStyle: "solid",
    paddingTop: 32,
  },

  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "24%",
    paddingVertical: 8,
  },

  content: {
    borderColor: "#f0f",
    borderWidth: 4,
    flexDirection: "row",
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
