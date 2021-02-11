import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, FlatList  } from 'react-native';
import { getMovieFromAPi } from '../Api/Tmdb';
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import { FilmItem } from './FilmItem';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text : '',
            films : null
        }
    }

    _submit = () => {
        let text = this.state.text;

        if(text.length > 0)
        {
            getMovieFromAPi(text).then( data => this.setState( { films : data.results }));
        }
    }

    render() {
        return(
            <View style={{flex:1}}>
                <View style={GlobalStyles.inputContainer}>
                    <TextInput
                        style={GlobalStyles.input}
                        placeholder="Titre, Producteur.. etc"
                        onChangeText={(text) => this.setState({ text }) }
                    />
                    <Button
                        title="Rechercher"
                        onPress={ () => this._submit() }
                    />
                </View>
                <View style={{flex:1}}>
                    <FlatList 
                        data={this.state.films}
                        renderItem={ (item) => <FilmItem films={item.item} navigation={this.props.navigation} />}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View>
        );
    }
}