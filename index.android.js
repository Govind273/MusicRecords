/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  Text,
  View
} from 'react-native';

import Album from './components/Album';

const App = () => (
	     <Album />
  	  );

AppRegistry.registerComponent('albums', () => App);
