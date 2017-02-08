// @flow
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import Followers from './Followers';

import account from '../../assets/account.png';

type Props = {
  navigation: Object,
};

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

class FollowersNavigationWrapper extends Component {
  props: Props

  static navigationOptions = {
    title: ({ state }) => state.params.user,
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
        user={this.props.navigation.state.params.user}
        goTo={user => this.props.navigation.navigate('User', { user })}
      />
    );
  }
}

export default FollowersNavigationWrapper;
