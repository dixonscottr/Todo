import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { ListItem } from './ListItem'

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newToDo: ''
    }
  }

  handlePress() {
    const todo = this.state.newToDo;
    const newTodos = this.state.todos.concat(todo)
    this.setState({ todos: newTodos })
    this.setState({ newToDo: '' })
  }

  resetTodos() {
    this.setState({ todos: [] })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.welcome}>To do list</Text>
        </View>
        <TextInput
          style={styles.textInput}
          value={this.state.newToDo}
          onChangeText={(newToDo) => this.setState({ newToDo })}
        />
        <View style={styles.content}>
          <TouchableHighlight style={styles.button} onPress={this.handlePress.bind(this)}>
            <Text>Add Todo</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.resetTodos.bind(this)}>
            <Text>Reset List</Text>
          </TouchableHighlight>
        </View>
        {this.state.todos.map((todo, i) => <ListItem key={i} todo={todo} />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cornsilk'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'maroon',
    fontFamily: 'Avenir-Heavy'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 8
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 2,
    padding: 3,
    backgroundColor: 'lightblue'
  },
  content: {
    flexDirection:'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  buttonText: {
  }
});