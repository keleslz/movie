import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { TabsBottomBar, HomeStackScreen, SearchStackScreen, FilmDetailScreen } from './Navigations/Navigation';

import { Home } from "./Components/Home";
import { Search } from "./Components/Search";
import { FilmDetail } from "./Components/FilmDetail";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Si on est pas connecté on appel Token < AuthStackScreen /> */}
        <TabsBottomBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
