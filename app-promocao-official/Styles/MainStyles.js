import { StyleSheet } from 'react-native';

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

    button: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#fff',
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
        borderWidth: 2,
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
        borderColor: '#f0f',
        borderWidth: 2,
    },

    preco: {
        color: '#000',
        fontSize: 20,
        borderColor: '#00f',
        borderWidth: 1,
    },

    Promocao: {
        borderColor: '#f0f',
        borderWidth: 1,
        height: 170,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    titles: {
        color: '#fff',
        fontSize: 22,
        fontWeight: "bold",
        borderColor: '#f00',
        borderWidth: 0,
        marginLeft: 7.5,
    },
});
/*borderColor: '#f0f',
        borderWidth: 1,
        height: 170,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        */
export default styles