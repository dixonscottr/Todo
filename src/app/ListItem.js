import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export class ListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false
    }
  }

  handlePress() {
    this.setState({
      done: !(this.state.done)
    })
    console.log(this.state)
  }

  render() {
    return (
      <Text
        style={this.state.done ? styles.done : styles.notdone}
        onPress={this.handlePress.bind(this)}
      >
        {this.props.todo}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  notdone: {
    textDecorationLine: 'none'
  },
  done: {
    textDecorationLine: 'line-through'
  }
});