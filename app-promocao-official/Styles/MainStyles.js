import { StyleSheet } from 'react-native';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff6600',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: "solid"
    },

    image: {
        width: 150,
        height: 150
    },

    buttonsContainer: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 50,
    },

    textTitlle: {
        textAlign: 'center',
        padding: 5,
    },

    button:{
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor:'#fff',
        width: 60,
        height: 60,
        borderWidth: 1,
    },
    border: {
        borderWidth: 1,
        borderStyle: "solid",
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "90%",
        alignItems: "center",

    },
    top: {
        borderWidth: 1,
        borderColor: '#f00',
    },

    precoContainer: {
        borderColor: '#0ff',
        borderWidth: 1,    
        width: 125,
        height: 175,    
        marginLeft: 7.5,
        marginRight: 7.5,
      },
      oferta: {
        width: '100%',
        height: 125,
    
        borderColor: '#0ff',
        borderWidth: 1,
      },
      preco: {
        color: '#fff',
        fontSize: 20,
    
        borderColor: '#00f',
        borderWidth: 1,
      },
      promocao: {
        color: '#b7b7b7',
        fontSize: 12,    
        borderColor: '#f00',
        borderWidth: 1,
      },
});

export default styles