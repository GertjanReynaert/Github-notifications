// @flow
import React, { Component } from 'react';
import UserProfileContainer from './UserProfileContainer';

type Props = {
  navigation: Object
};

class UserNavigationWrapper extends Component {
  props: Props;

  static navigationOptions = {
    title: ({ state }) => state.params.user
  };

  render() {
    return (
      <UserProfileContainer
        user={this.props.navigation.state.params.user}
        goTo={user => this.props.navigation.navigate('User', { user })}
      />
    );
  }
}

export default UserNavigationWrapper;
