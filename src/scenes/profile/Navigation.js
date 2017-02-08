// @flow

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import FollowersNavigationWrapper from './FollowersNavigationWrapper';
import Followers from './Followers';

type Props = {
  navigation: Object,
};

class Profile extends Component {
  props: Props;
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
  Profile: { screen: Profile },
  User: { screen: FollowersNavigationWrapper },
});

export default Navigation;
