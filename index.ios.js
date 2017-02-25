/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Followers from './src/Followers';

export default class GithubNotifications extends Component {
  render() {
    return (
      <Followers user="GertjanReynaert" />
    );
  }
}

AppRegistry.registerComponent('github_notifications', () => GithubNotifications);
