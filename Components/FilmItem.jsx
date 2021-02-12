import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getMoviePictureFromAPi } from '../Api/Tmdb';
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import { isFavoriteIcon } from '../Tools/Tools';

const Container = ({ children }) => {
    return <View style={styles.container}>{ children }</View>
};

const Header = ({ children }) => {
    return <View style={styles.header}>{ children }</View>
};

const Description = ({ children }) => {
    return <Text numberOfLines={6} style={styles.description}>{ children }</Text>
};

export class FilmItem extends React.Component {

    constructor(props) {
        super(props)
    }

    getPicture = (path) => {
        return path !== null ?  { uri: getMoviePictureFromAPi(path) } : require('../assets/images/no-image.png') ;
    }

    render() {
        const film = this.props.films.item; 
        const path = film.poster_path;
        return(
            <TouchableOpacity
                style={styles.mainContainer}
                onPress={()=> { 
                    this.props.navigation.navigate('FilmDetail', { film : film  })
                }}>
                 <Image style={styles.image} source={ this.getPicture(path) } /> 
                    <Container>
                        <Header>
                            <Text numberOfLines={1} style={styles.title}>{film.title}</Text>
                            <Text style={styles.note}>{film.vote_average}</Text>
                        </Header>
                        <Image style={styles.icon} source={isFavoriteIcon()}/>
                        <Description >{film.overview ? film.overview : 'Aucune description'}</Description>
                    </Container>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    mainContainer :{
        flex:1,
        flexDirection:'row',
        padding : 5,
        marginBottom : 10,
        height : 200
    },
    container: {
        flex:3,
    },
    image : {
        width: 200,
        height: '100%',
        marginRight: 5 ,
        flex: 1.5,
        resizeMode :'cover' ,
        borderWidth : 1,
        borderRadius : 3,
        borderColor : '#acacac'
    },
    header: {
        flexDirection : 'row',
        alignItems:'center'
    },
    title:{
        fontSize : 20,
        fontWeight : '800',
        flex: 3 ,
        paddingRight:5,
        paddingLeft : 5
    },
    note : {
        fontSize : 25,
        padding: 2
    },
    icon : {
        width : 30,
        height : 30,
    },
    description: {
        flex: 1,
        paddingTop : 10,
        paddingLeft: 5,
        fontSize: 18
    }
})

