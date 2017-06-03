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

const App = () => {
  const {container} = styles;

  return <Text style={container}>Hello</Text>;
  };

const styles ={ 
  container: {
    fontSize: 20,
    backgroundColor: "orange"
  }
};



AppRegistry.registerComponent('albums', () => App);
