import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../Styles/MainStyles";



export default function Login({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const entrar = () => {
        navigation.push("Home");
    };

    const cadastro= () => {
        navigation.push("TelaCadastro");
    };

    return (
        <View style={styles.container}>
            
            
            <Image
                style={styles.image}
                resizeMode="center"
                source={require('../assets/User.png')}
            />
            
            <Text h4>Faça seu login </Text>                   
        
            <Input
                placeholder="E-mail"
                leftIcon={{ type: "font-awesome", name: "envelope" }}
                onChangeText={(value) => setEmail(value)}
                keyboardType="email-address"
                placeholderTextColor = '#000000'
            />

            <Input
                placeholder="Senha"
                leftIcon={{ type: "font-awesome", name: "key" }} 
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
                placeholderTextColor = '#000000'
            />

            <Button
                icon={<Icon name="user" size={15} color="white" />}
                title="Entrar "
                onPress={() => entrar()}
            />

            <Button
                title="Fazer cadastro"
                type="clear"
                onPress={() => cadastro()}
            />

        </View>
    );
}
