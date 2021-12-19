import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../Styles/MainStyles";

export default function Login({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
  
    const entrar = () => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    };
  
    return (
      <View style={styles.container}>
        <Text h3>Entre aqui</Text>
        <Input
          placeholder="E-mail"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(value) => setEmail(value)}
          keyboardType="email-address"
        />
  
        <Input
          placeholder="Senha"
          leftIcon={{ type: "font-awesome", name: "key" }}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
        />
      </View>
    );
  }