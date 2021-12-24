import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, CheckBox, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../Styles/MainStyles";

export default function TelaCadastro({ navigation }) {

    const cadastroCliente = () => {
        navigation.push("TelaCadastroCliente");
    };

    const cadastroLoja = () => {
        navigation.push("TelaCadastroLoja");
    };

    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                resizeMode="center"
                source={require('../assets/User.png')}
            />

            <Button style={styles.button}                
                title=" Fazer cadastro como cliente"
                icon={<Icon name="user-circle" size={15} color="white" />}                
                onPress={() => cadastroCliente()}
            />

            <Button
                icon={<Icon name="shopping-bag" size={15} color="white" />}
                title=" Fazer cadastro como loja"
                onPress={() => cadastroLoja()}
            />
        </View>
    );
}