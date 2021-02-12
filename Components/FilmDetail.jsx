import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet, Image  } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { getMoviePictureFromAPi } from '../Api/Tmdb';
import { isFavoriteIcon } from '../Tools/Tools';
import { ToggleFavoriteReducer } from '../Store/Reducers/favoriteReducer';
import Store from "../Store/configureStore";

export class FilmDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          favoriteFilm: undefined,
          isLoading: true,
        }
    }

    _getPicture = (path) => {
        return path !== null ?  { uri: getMoviePictureFromAPi(path) } : require('../assets/images/no-image.png') ;
    }

    /**
     * Récupère la liste des favoris directement grâce au ToggleFavoriteReducer
     */
    _getFavorites = () => {
        const film = this.props.route.params.film;
        const action = { type: "TOGGLE_FAVORITE", value: film};
        const state = ToggleFavoriteReducer(undefined, {});
        const myfavoriteList = state.favoritesFilm;
        return { film, action, state, myfavoriteList } 
    }

    _removeItem = (array, index) => {
        return array.splice(index, 1);
    }
    
    _setFavorite = () => {
        let favorite = null;
        const { film, action, state, myfavoriteList } = this._getFavorites();
        const index = myfavoriteList.findIndex(item => item.id === film.id)
        const  isFavorite = index !== -1;
        const list =  [...myfavoriteList];

        if(isFavorite){   
            this._removeItem(myfavoriteList, index)
            favorite = true
        }else {
            myfavoriteList.push(film);
            ToggleFavoriteReducer(state, action);
            favorite = false
        }
        this.setState({ isFavorite : favorite, film: myfavoriteList})
    }

    _displayFavoriteImage() {

        const { film, myfavoriteList } = this._getFavorites();

        let  sourceImage = require('../assets/images/ic_no_favorite.png');

        if (myfavoriteList.findIndex(item => item.id === film.id) !== -1) {
          sourceImage = require('../assets/images/ic_favorite.png')
        }

        return (
          <Image
            source={sourceImage}
          />
        )
    }
    render() {
        const { film } = this.props.route.params;

        return(
            <ScrollView style={styles.mainContainer}>
                <Image style={styles.image} source={this._getPicture(film.poster_path)} />
                <Text numberOfLines={1} style={styles.title}>{film.title}</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={{padding : 3}} onPress={() => this._setFavorite(false) }>
                        {/* <Image style={styles.icon} source={this._displayFavoriteImage()}/>
                         */}
                         {this._displayFavoriteImage()}
                    </TouchableOpacity>
                </View>
                <Text style={styles.note}>{film.vote_average}</Text>
                <Text style={styles.description}>{film.overview ? film.overview : 'Aucune description'}</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer :{
        flex : 1,
        paddingTop: 10,
        padding : 10,
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
        lineHeight : 22,
        marginBottom : 100
    }
})

const mapStateToProps = (state) => {
    return {
        /**
         * En faisant ainsi on ne recupere seuelement le state de de favoritesFilm
         *  en mettant que "favoritesFilm: state" on recupere tous le state de l'app
        */
        favoritesFilm: state.favoritesFilm 
    };
};

/**
 * Cela signifie que l'on vient, à l'instant, de mapper le state de notre application
 * dans les props du component FilmDetail. :waw: À présent, dans les props du component
 * FilmDetail, vous avez accès au state de l'application et donc aux films favoris.
 */
export default connect( mapStateToProps)(FilmDetail);