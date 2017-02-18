// @flow
import React, { Component } from 'react';
import { View, Text, Image, TextInput, Platform, StyleSheet } from 'react-native';
import githubLogo from '../../assets/github_logo.png';
import Button from '../../components/Button';
import { lightgray } from '../../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Platform.OS === 'ios' ? 30 : 10,
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
    flex: 3,
    padding: 15,
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: lightgray,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 15,
  },
  horizontalRow: {
    alignSelf: 'stretch',
    borderWidth: 0.5,
    borderColor: lightgray,
    marginTop: 40,
    marginBottom: 40,
  },
});

type Props = {
  login: () => void,
  oAuthLogin: () => void,
};

class Login extends Component {
  props: Props

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

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
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={text => this.setState({ username: text })}
          />

          <Text style={styles.inputLabel}>
            Password
          </Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={text => this.setState({ password: text })}
          />

          <Button
            title="Sign in"
            onPress={() => this.props.login(this.state.username, this.state.password)}
          />

          <View style={styles.horizontalRow} />

          <Button
            title="OAuth Login"
            onPress={() => this.props.oAuthLogin()}
          />
        </View>
      </View>
    );
  }
}

export default Login;
