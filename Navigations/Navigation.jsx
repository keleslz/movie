import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { Home } from "../Components/Home";
import { Search } from "../Components/Search";
import { FilmDetail } from "../Components/FilmDetail";

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options={{title : 'Accueil'}} />
        </HomeStack.Navigator>
    );
}

const SearchStack = createStackNavigator();
export const SearchStackScreen = () => {
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" component={Search} options={{title : 'Rechercher'}} />
            <SearchStack.Screen name="FilmDetail" component={FilmDetail} options={{title : 'Detail'}} />
        </SearchStack.Navigator>
    );
}

const FilmDetailStack = createStackNavigator();
export const FilmDetailScreen = () => {
    if(true) {
        return (
            <FilmDetailStack.Navigator>
                <FilmDetailStack.Screen name="FilmDetail" component={FilmDetail} options={{title : 'Details'}} />
            </FilmDetailStack.Navigator>
        );
    }
}

const Tabs = createBottomTabNavigator();

export const TabsBottomBar = () => {
    return(
    <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} 
            options={{
                tabBarLabel:() => null,
                tabBarBadge: 0,
                tabBarIcon: ({ color }) => ( <Icon name="home" color={color} size={26} /> )
            }}
            
        />
        <Tabs.Screen name="Search" component={SearchStackScreen} 
            options={{
                tabBarLabel:() => null,
                tabBarIcon: ({ color }) =>  <Icon name="search" color={color} size={26} /> 
            }}
        />
    </Tabs.Navigator>
    );
}