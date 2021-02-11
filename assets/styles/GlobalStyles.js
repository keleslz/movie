import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    inputContainer : {
        width : '100%',
        padding : 5,
        justifyContent:'center',
        alignItems : 'center'
    },
    input : {
        height: 40,
        padding:5,
        width : '100%',
        minWidth : 150,
        maxWidth : 350,
        borderColor: '#ccc',
        borderWidth: 1 ,
        borderRadius: 5,
        marginVertical : 5
    }
})