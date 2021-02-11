import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import {TabsBottomBar, HomeStackScreen} from './Navigations/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* < HomeStackScreen /> */}
        <TabsBottomBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
