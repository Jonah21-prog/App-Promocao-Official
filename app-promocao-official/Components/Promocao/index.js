import React from 'react';
import styles from "../../Styles/MainStyles";
import { TouchableOpacity, Image, Text, View } from 'react-native';



export default function Promocao(props) {
    return (
        <TouchableOpacity
            style={styles.precoContainer}
            onPress={() => alert("Clicado")}
        >
            <Image
                style={styles.oferta}
                source={
                    props.source
                }
            >
            </Image>
            <View style={{ flexDirection: 'row', heigth: '100%' }}>
                <View>
                    <Text style={styles.promocao}>
                        {"22.99"}
                    </Text>
                    <Text style={styles.preco}>
                        {"18.99"}
                    </Text>
                </View>
                <TouchableOpacity 
                onPress={() => alert("Clicado ícone")}
                >                    
                    <Image
                        source={require('../../assets/UserLoja.png')}                        
                    />                    
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    );
}