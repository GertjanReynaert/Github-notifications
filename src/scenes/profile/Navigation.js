// @flow

import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import account from '../../assets/account.png';

import FollowersNavigationWrapper from './FollowersNavigationWrapper';
import Followers from './Followers';

type Props = {
  navigation: Object,
};

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

class Profile extends Component {
  props: Props;
  static navigationOptions = {
    title: 'GertjanReynaert',
    tabBar: {
      label: 'Profile',
      icon: ({ tintColor }) => (
        <Image source={account} style={[styles.icon, { tintColor }]} />
      ),
    },
  }

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
