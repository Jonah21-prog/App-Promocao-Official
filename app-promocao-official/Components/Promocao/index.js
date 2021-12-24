import React from 'react';
import styles from "../../Styles/MainStyles";
import { TouchableOpacity, Image, Text, View } from 'react-native';



export default function Promocao(props) {
    return (
        <TouchableOpacity
            style={styles.precoContainer}
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
                <TouchableOpacity>                    
                    <Image
                        source={require('../../assets/userVendedor.png')}
                        style={{ heigth: 20, width: 20 }}
                    />
                    <Text>Vendedor</Text>
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    );
}