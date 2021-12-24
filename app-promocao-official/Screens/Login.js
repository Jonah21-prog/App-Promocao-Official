import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import styles from "../Styles/MainStyles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const entrar = () => {
    navigation.push("Home");
  };

  const cadastro = () => {
    navigation.push("TelaCadastro");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="center"
        source={require("../assets/User.png")}
      />
      <Text h4>Faça seu login </Text>

      <View style={{ width: "80%" }}>
        <Input
          placeholder="E-mail"
          onChangeText={(value) => setEmail(value)}
          keyboardType="email-address"
          placeholderTextColor="#000000"
        />
        <Input
          placeholder="Senha"
          leftIcon={{ type: "font-awesome", name: "key" }}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          placeholderTextColor="#000000"
        />
      </View>

      <View
        style={{
          padding: 8,
          flexDirection: "row",
          width: "70%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          title="Entrar"
          icon={{
            name: "user",
            type: "font-awesome",
            size: 20,
            color: "white",
          }}
          iconContainerStyle={{ marginRight: 8 }}
          onPress={() => entrar()}
        />

        <Button
          title="Fazer Cadastro"
          icon={{
            name: "home",
            type: "font-awesome",
            size: 20,
            color: "white",
          }}
          iconContainerStyle={{ marginRight: 8 }}
        />
      </View>
    </View>
  );
}

const specificStyle = StyleSheet.create({
  circle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
});
