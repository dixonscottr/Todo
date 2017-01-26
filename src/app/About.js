import React, { Component, PropTypes } from 'react';
import { View,
        Text,
        Navigator,
        TouchableHighlight,
        StyleSheet,
        Linking
} from 'react-native';

export class About extends Component {

  handleClick = () => {
    Linking.canOpenURL('https://github.com/dixonscottr/Todo').then(supported => {
      if (supported) {
        Linking.openURL('https://github.com/dixonscottr/Todo');
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };

  render () {
    return (
      <View style={styles.main}>
        <TouchableHighlight style={styles.back} onPress={this.props.onBack}>
          <Text style={styles.backText}>&#x2039;</Text>
        </TouchableHighlight>
        <View style={styles.container}>
          <Text style={styles.primary}>
            To do: a React Native app
          </Text>
          <Text style={styles.secondary}>
            Coded by Scott Dixon
          </Text>
          <TouchableHighlight style={styles.button} onPress={this.handleClick}>
            <Text style={styles.normalText}>Source Code</Text>
          </TouchableHighlight>
        </View>
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
  backText: {
    fontSize: 40
  },
  back: {
    paddingLeft: 10
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  todo: {
    marginBottom: 10
  },
  primary: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#313638',
    fontWeight: 'bold'
  },
  secondary: {
    fontSize: 20,
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