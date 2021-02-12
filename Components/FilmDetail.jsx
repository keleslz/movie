import React from 'react';
import { View, Text, TextInput, StyleSheet, Image  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getMoviePictureFromAPi } from '../Api/Tmdb';
import { isFavoriteIcon } from '../Tools/Tools';

export const FilmDetail = ({ route, navigation }) => {

    const { film } = route.params;

    const getPicture = (path) => {
        return path !== null ?  { uri: getMoviePictureFromAPi(path) } : require('../assets/images/no-image.png') ;
    }

    const setFavorite = () => {
        console.log(film);
    }

    return(
        <View style={styles.mainContainer}>
            <Image style={styles.image} source={getPicture(film.poster_path)} />
            <Text numberOfLines={1} style={styles.title}>{film.title}</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={{padding : 3}} onPress={() => setFavorite() }>
                    <Image style={styles.icon} source={isFavoriteIcon()}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.note}>{film.vote_average}</Text>
            <Text style={styles.description}>{film.overview ? film.overview : 'Aucune description'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer :{
        flex : 1,
        paddingTop: 10,
        padding : 10
    },
    image : {
        height: 300,
        resizeMode :'contain' ,
        marginBottom:20
    },
    title:{
        fontSize : 25,
        fontWeight : '600', 
        textAlign:'center'
    },
    note : {
        fontSize : 20,
        fontWeight : '500',
        marginBottom:10
    },
    iconContainer : {
        display: 'flex',
        alignItems:'center',
        marginVertical : 10
    },
    icon : {
        width : 30,
        height : 30,
    },
    description: {
        fontSize: 18,
        lineHeight : 22
    }
})

