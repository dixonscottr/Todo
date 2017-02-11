import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export const ListItem = ({done, text, toggleDone, removeTodo}) => (
    <View style={styles.tasksHolder}>
      <View style={styles.taskHolder}>
        <Text style={done ? styles.done : styles.notdone}>
          {text}
        </Text>
      </View>
      <View style={styles.buttonHolder}>
        <TouchableHighlight
          style={styles.button}
          onPress={toggleDone.bind(this)}
        >
          <Text style={styles.buttonText}>✔︎</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={removeTodo.bind(this)}
        >
          <Text style={styles.buttonText}>✘</Text>
        </TouchableHighlight>
      </View>
    </View>
)

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Avenir-Heavy',
    color: '#313638'
  },
  notdone: {
    textDecorationLine: 'none',
    fontFamily: 'Avenir-Heavy',
    fontSize: 20,
    color: "#313638"
  },
  done: {
    textDecorationLine: 'line-through',
    fontFamily: 'Avenir-Heavy',
    fontSize: 20,
    color: 'red'
  },
  button: {
    borderRadius: 5,
    margin: 5,
    padding: 15,
    backgroundColor: '#E4B363'
  },
  tasksHolder: {
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  taskHolder: {
    marginLeft: 0,
    flexDirection:'row',
    justifyContent: 'flex-start',
  },
  buttonHolder: {
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 0
  }
});