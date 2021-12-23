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
    }
});

export default styles