// @flow
import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import { lightestgray, lightergray } from '../colors';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: lightestgray,
    borderWidth: 1,
    borderColor: lightergray,
    borderRadius: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

type Props = {
  onPress: () => void,
  title: string,
};

class Button extends Component {
  props: Props

  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={lightergray}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
}

export default Button;
