import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { TabsBottomBar, HomeStackScreen, SearchStackScreen, FilmDetailScreen } from './Navigations/Navigation';
import { Provider } from 'react-redux';
import Store from "./Store/configureStore";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
      <Provider  store={Store}>
        <NavigationContainer>
          {/* Si on est pas connecté on appel Token < AuthStackScreen /> */}

            <TabsBottomBar />
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
