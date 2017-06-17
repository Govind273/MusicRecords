/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './components/header';
import AlbumList from './components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Chacha'} />
    <AlbumList />
  </View>
);


AppRegistry.registerComponent('albums', () => App);
