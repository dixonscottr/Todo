import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export class ListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false
    }
  }

  toggleDone() {
    this.setState({
      done: !(this.state.done)
    })
  }

  render() {
    return (
      <View style={styles.buttonHolder}>
        <Text
          style={this.state.done ? styles.done : styles.notdone}
        >
          {this.props.todo}
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={this.toggleDone.bind(this)}
        >
          <Text style={styles.buttonText}>✔️</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.removeTodo.call(this, this.props.idx)}
        >
          <Text style={styles.buttonText}>🗑</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Avenir-Heavy'
  },
  notdone: {
    textDecorationLine: 'none',
    fontFamily: 'Avenir-Heavy'
  },
  done: {
    textDecorationLine: 'line-through',
    fontFamily: 'Avenir-Heavy'
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 2,
    padding: 3,
    backgroundColor: 'white'
  },
  buttonHolder: {
    flexDirection:'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }
});