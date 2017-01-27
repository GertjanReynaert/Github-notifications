/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FollowersNavigationWrapper from './src/FollowersNavigationWrapper';
import Followers from './src/Followers';

type Props = {
  navigation: Object,
};

class GithubNotifications extends Component {
  props: Props

  static navigationOptions = {
    title: 'GertjanReynaert',
  };

  render() {
    return (
      <Followers
        user="GertjanReynaert"
        goTo={user => this.props.navigation.navigate('User', { user })}
      />
    );
  }
}

const Navigation = StackNavigator({
  Initial: { screen: GithubNotifications },
  User: { screen: FollowersNavigationWrapper },
});

AppRegistry.registerComponent('github_notifications', () => Navigation);
