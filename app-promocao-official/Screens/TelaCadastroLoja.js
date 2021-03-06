import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, CheckBox, Input, Text } from "react-native-elements";
import CheckBoxIcon from "react-native-elements/dist/checkbox/CheckBoxIcon";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../Styles/MainStyles";

export default function TelaCadastroLoja({ navigation }) {
    const [email, setEmail] = useState(null);
    const [nome, setNome] = useState(null);
    const [cnpj, setCnpj] = useState(null);
    const [endereco, setEndereco] = useState(null);
    const [contato, setContato] = useState(null);
    const [isSelected, setSelected] = useState(false);
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorNome, setErrorNome] = useState(null);
    const [errorCnpj, setErrorCnpj] = useState(null);
    const [errorEndereco, setErrorEndereco] = useState(null);
    const [errorContato, setErrorContato] = useState(null);

    state = {
        email,
        nome,
        cnpj,
        endereco,
        contato,
    }

    onRequest = async()=>{
        try{
            const res = await axios.post('http://localhost:8080/vendedores',{...this.state});
            return res.data;
        } catch(error){
            console.log('erro: ', error);
        }
        
    };

    salvar = () => {
        onPress={...this.onRequest}
        navigation.push("Home");
    }

    const validar = () => {
        let error = false
        setErrorEmail(null)
        setErrorNome(null)
        setErrorCnpj(null)
        setErrorEndereco(null)
        setErrorContato(null)
        
        if (validar()) {
            setErrorEmail ("Preencha o seu e-mail corretamente")    
            error = true        
        }
        if (validar()) {
            setErrorNome ("Preencha o seu nome corretamente")    
            error = true        
        }
        if (validar()) {
            setErrorCnpj ("Preencha o seu CNPJ corretamente")    
            error = true        
        }
        if (validar()) {
            setErrorEndereco ("Preencha o seu endere??o corretamente")    
            error = true        
        }
        if (validar()) {
            setErrorContato ("Preencha o seu contato corretamente")    
            error = true        
        }
        return !error
    }

    const salvar = () => {
        navigation.push("Home");
    }

    return (
        <View style={styles.container}>
            <Text h3>Cadastre-se</Text>
            <Input
                placeholder="E-mail"
                onChangeText={(value) => {
                    setEmail(value)
                    setErrorEmail(null)
                }}
                keyboardType="email-address"
                placeholderTextColor='#a6a6a6'
                errorMessage={errorEmail}
            />

            <Input
                placeholder="Nome"
                onChangeText={(value) => {
                    setNome(value)
                    setErrorNome(null)
                }}
                keyboardType="email-address"
                placeholderTextColor='#a6a6a6'
                errorMessage={errorNome}
            />

            <Input
                placeholder="CNPJ"
                onChangeText={(value) => {
                    setCnpj(value)
                    setErrorCnpj(null)
                }}
                keyboardType="number-pad"
                placeholderTextColor='#a6a6a6'
                returnKeyType="Done"
                errorMessage={errorCnpj}
            />

            <Input
                placeholder="Endereco"
                onChangeText={(value) => {
                    setEndereco(value)
                    setErrorEndereco(null)
                }}
                keyboardType="email-address"
                placeholderTextColor='#a6a6a6'
                errorMessage={errorEndereco}
            />

            <Input
                placeholder="Contato"
                onChangeText={(value) => {
                    setContato(value)
                    setErrorContato(null)
                }}
                keyboardType="phone-pad"
                placeholderTextColor='#a6a6a6'
                returnKeyType="Done"
                errorMessage={errorContato}
            />

            <CheckBox
                title="Eu aceito os termos de uso"
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="green"
                uncheckedColor="red"
                checked={isSelected}
                onPress={() => setSelected(!isSelected)}
            />

            <Button
                icon={<Icon name="user" size={15} color="white" />}
                title="Salvar "
                onPress={() => salvar()}
            />



        </View>
    );


}

