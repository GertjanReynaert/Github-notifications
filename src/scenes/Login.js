// @flow
import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import githubLogo from '../assets/github_logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
  },
  heroImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: 300,
  },
  loginFields: {
    flex: 2,
    padding: 15,
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 15,
  },
  button: {
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: 'whitesmoke',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  horizontalRow: {
    alignSelf: 'stretch',
    borderWidth: 0.5,
    borderColor: 'lightgray',
    marginTop: 50,
    marginBottom: 50,
  },
});

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heroImage}>
          <Image source={githubLogo} style={styles.logo} resizeMode="contain" />
        </View>

        <View style={styles.loginFields}>
          <Text style={styles.inputLabel}>
            Username or email
          </Text>
          <TextInput style={styles.input} autoCapitalize="none" keyboardType="email-address" />

          <Text style={styles.inputLabel}>
            Password
          </Text>
          <TextInput style={styles.input} secureTextEntry />

          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </View>

          <View style={styles.horizontalRow} />

          <TouchableHighlight onPress={() => console.log('press')} underlayColor="lightgray" style={{ borderRadius: 5 }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>OAuth Login</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Login;
