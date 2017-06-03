/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';

import Header from './components/header';
const App = () => {
 

  return(
  		<Header />
  	);
  };

const styles ={ 
  container: {
    fontSize: 20,
    backgroundColor: "orange"
  }
};



AppRegistry.registerComponent('albums', () => App);
