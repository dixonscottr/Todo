import React, { Component, PropTypes } from 'react';
import { View,
        Text,
        Navigator,
        TouchableHighlight,
        StyleSheet
} from 'react-native';

export class About extends Component {

  render () {
    return (
      <View style={styles.main}>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text style={styles.normalText}>Go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E0DFD5',
    paddingTop: 30
  },
  normalText: {
    fontFamily: 'Avenir-Heavy'
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
    marginTop: 20
  },
  buttonText: {
    color: '#313638',
    fontFamily: 'Avenir-Heavy'
  }
});