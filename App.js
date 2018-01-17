
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import Header from './src/common/Header';
import LibraryList from './src/components/LibraryList'

const App = () => {
  return (
    <Provider store={createStore(reducers)} >
    <View style={{flex:1}}>
    <Header/>
    <LibraryList/>
    </View>
    </Provider>
  );

}

export default App;