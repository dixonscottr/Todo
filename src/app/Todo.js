import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { ListItem } from './ListItem';

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
    const newTodos = this.state.todos.concat(todo);
    this.setState({ todos: newTodos });
    this.setState({ newToDo: '' });
  }

  resetTodos() {
    this.setState({ todos: [] });
  }

  removeTodo(idx) {
    const newTodos = [...this.state.todos.slice(0,idx), ...this.state.todos.slice(idx + 1)];
    this.setState({ todos: newTodos})
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.title}>
          <Text style={styles.welcome}>To do list</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            value={this.state.newToDo}
            onChangeText={(newToDo) => this.setState({ newToDo })}
          />
          <View style={styles.content}>
            <TouchableHighlight style={styles.button} onPress={this.handlePress.bind(this)}>
              <Text>Add Todo</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={this.resetTodos}>
              <Text>Reset List</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.todoContainer}>
          {this.state.todos.map((todo, i) => <ListItem idx={i} key={i} todo={todo} style={styles.todo} removeTodo={this.removeTodo.bind(this)} />)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'cornsilk',
    paddingTop: 30
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  todoContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  todo: {
    marginBottom: 10
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