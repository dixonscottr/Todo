import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
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
              <Text style={styles.buttonText}>Add Task</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={this.resetTodos.bind(this)}>
              <Text style={styles.buttonText}>Reset List</Text>
            </TouchableHighlight>
          </View>
        <View style={styles.listContent}>
          {this.state.todos.map((todo, i) => <ListItem idx={i} key={i} todo={todo} style={styles.todo} removeTodo={this.removeTodo.bind(this)} />)}
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E0DFD5',
    paddingTop: 30
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  todo: {
    marginBottom: 10
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#313638',
    fontWeight: 'bold'
  },
  textInput: {
    height: 40,
    borderColor: '#E4B363',
    borderWidth: 2,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 8
  },
  button: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 5,
    margin: 2,
    padding: 15,
    backgroundColor: '#E4B363'
  },
  content: {
    flexDirection:'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  listContent: {
    // flex: 1,
    // flexDirection:'column',
    // alignItems: 'center'
    marginTop: 20
  },
  buttonText: {
    color: '#313638',
    fontFamily: 'Avenir-Heavy'
  }
});