import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export class ListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
      styles: 'styles.notdone'
    }
  }

  handlePress() {
    this.setState({
      done: !(this.state.done)
    })
    if(this.state.done) {
      this.setState({
        styles: 'styles.done'
      })
    } else {
      this.setState({
        styles: 'styles.notdone'
      })      
    }
  }

  render() {
    let style = this.state.style
    return (
      <Text style={style} onPress={this.handlePress.bind(this)}>
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