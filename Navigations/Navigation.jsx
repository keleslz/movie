import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Search, FilmDetail } from '../Components/Views';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const FilmDetailStack = createStackNavigator();

export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
    );
}

export const SearchStackScreen = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" component={Search} />
        </SearchStack.Navigator>
    );
}

export const FilmDetailScreen = () => {
    return (
        <FilmDetail.Navigator>
            <FilmDetail.Screen name="FilmDetail" component={FilmDetail} />
        </FilmDetail.Navigator>
    );
}


const Tabs = createBottomTabNavigator();

export const TabsBottomBar = () => {
    return(
    <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Search" component={SearchStackScreen} />
    </Tabs.Navigator>
    );
}