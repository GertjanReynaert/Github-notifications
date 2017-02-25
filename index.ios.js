// @flow

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

import UserProfile from './src/UserProfile';

export default class githubNotifications extends Component {
  render() {
    return <UserProfile user="gertjanreynaert" />;
  }
}

AppRegistry.registerComponent('githubNotifications', () => githubNotifications);
