import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native';

import { FilmItem } from './FilmItem';
import { getMovieFromAPi } from '../Api/Tmdb';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { ToggleFavoriteReducer } from '../Store/Reducers/favoriteReducer';

export class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = ""
    this.page = 0
    this.totalPages = 0
    this.state = {
      films: [],
      isLoading: false
    }
  }

  _loadFilms() {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true })
      getMovieFromAPi(this.searchedText, this.page+1).then(data => {
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({
            films: [ ...this.state.films, ...data.results ], // Copy films[] and data.results in films variable ! imutabilté
            isLoading: false
          })
      })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text 
  }

  _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: [],
    }, () => {
        this._loadFilms()
    })
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={GlobalStyles.loading}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  render() {
    // const reducer = ToggleFavoriteReducer(undefined, {}); Continuer le tutto voir comment on recupere le reducer

    return (
      <View style={{flex:1}}>
      <View style={GlobalStyles.inputContainer}>
        <TextInput
          style={GlobalStyles.input}
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._searchFilms()}
        />
      </View>
        <Button title='Rechercher' onPress={() => this._searchFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) =>  <FilmItem films={item} navigation={this.props.navigation} />}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
              if (this.page < this.totalPages) {
                 this._loadFilms()
              }
          }}
        />
        {this._displayLoading()}
      </View>
    )
  }
}
