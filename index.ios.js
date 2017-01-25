/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
// import { Todo } from './src/app/Todo'
import { MainPage } from './src/app/MainPage'

// const Main = () => (<Todo />);
class Main extends Component {
  render() {
    return(
      <MainPage />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 2,
    padding: 2
  },
  content: {
    flexDirection:'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  notdone: {
    textDecorationLine: 'none'
  },
  done: {
    textDecorationLine: 'line-through'
  }
});

AppRegistry.registerComponent('Todo', () => Main);
