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
    },
    loading : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        top : 0,
        right : 0,
        bottom : 0,
        left : 0,
        position:'absolute',
    },
    checkedContainer : {
        flex: 1,
        width : '100%',
        height : 50,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor:'blue'
    },
    checkedPicture : {
        height : '100%',
        resizeMode : 'contain',
    },
    checkedText : {
        fontSize : 20,
        backgroundColor: 'red'
    }
})