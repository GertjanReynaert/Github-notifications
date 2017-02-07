/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';

import OAuthManager from 'react-native-oauth';
import { connect } from 'react-refetch';

import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from './env';

import Login from './src/scenes/Login';

const manager = new OAuthManager('ghnotifications');

manager.configure({
  github: {
    client_id: GITHUB_CLIENT_ID,
    client_secret: GITHUB_CLIENT_SECRET,
  },
});

type Props = {
  getNotifications: () => void,
};

class GithubNotifications extends Component {
  props: Props;
  constructor(props) {
    super(props);

    this.state = {
      accessToken: undefined,
    };
  }

  render() {
    const authorize = () => {
      manager.authorize('github')
        .then((resp) => { this.setState({ accessToken: resp.response.credentials.accessToken }); })
        .catch(err => console.log('There was an error', err));
    };

    if (this.state.accessToken === undefined) {
      return (
        <Login
          login={(username, password) => this.props.getNotifications({ username, password })}
          oAuthLogin={authorize}
        />
      );
    }

    return (
      <Text>Authorised root view</Text>
    );
  }
}

const connectedNotifications = connect(() => ({
  getNotifications: ({ username, password }) => ({
    notifications: {
      url: 'https://api.github.com/users/notifications',
      headers: {
        Host: 'api.github.com',
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    },
  }),
}))(GithubNotifications);

AppRegistry.registerComponent('github_notifications', () => connectedNotifications);
