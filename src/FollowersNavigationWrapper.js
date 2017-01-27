// @flow
import React, { Component } from 'react';
import Followers from './Followers';

type Props = {
  navigation: Object,
};

class FollowersNavigationWrapper extends Component {
  props: Props

  static navigationOptions = {
    title: ({ state }) => state.params.user,
  };

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
