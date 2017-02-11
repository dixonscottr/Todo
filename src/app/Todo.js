import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  AlertIOS
} from 'react-native';

import { ListItem } from './ListItem';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newToDo: '',
      id: 0
    };
  }

  handlePress() {
    const text = this.state.newToDo;
    if(text != '') {
      const newId = this.state.id + 1

      this.setState({
        id: newId
      })
      const newTodo = {
        content: text,
        done: false,
        id: this.state.id
      }
      const newTodos = this.state.todos.concat(newTodo);
      this.setState({ todos: newTodos });
      this.setState({ newToDo: '' });
    } else {
      AlertIOS.alert(
        'Your task cannot be blank!'
      );
    }
  }

  resetTodos() {
    this.setState({ todos: [] });
    AlertIOS.alert(
      'The task list is now empty'
    );
  }

  removeTodo(id) {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos})
  }

  toggleDone(id) {
    const todoToToggle = this.state.todos.find(todo => todo.id === id);
    todoToToggle.done = !todoToToggle.done;
    const newTodos = this.state.todos.map(todo => todo.id === todoToToggle.id ? todoToToggle : todo);
    this.setState({todos: newTodos});
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
            <ScrollView>
            {this.state.todos.map((todo, i) => {
              return (
              <ListItem
                id={todo.id}
                key={i}
                done={todo.done}
                text={todo.content}
                removeTodo={this.removeTodo.bind(this, todo.id)}
                toggleDone={this.toggleDone.bind(this, todo.id)} />
              )
              })
            }
            </ScrollView>
          </View>
        </View>
        <TouchableHighlight style={styles.aboutContainer} onPress={this.props.onForward}>
          <Text style={styles.aboutText}>About this app</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E0DFD5',
    paddingTop: 30
  },
  container: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'

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
  aboutText: {
    fontFamily: 'Avenir-Heavy',
    textAlign: 'center'
  },
  aboutContainer: {
    padding: 10
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
    marginTop: 20
  },
  buttonText: {
    color: '#313638',
    fontFamily: 'Avenir-Heavy'
  }
});