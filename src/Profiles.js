// @flow

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import UserNavigationWrapper from './UserNavigationWrapper';
import UserProfileContainer from './UserProfileContainer';

type Props = {
  navigation: Object
};

class Profile extends Component {
  props: Props;
  static navigationOptions = {
    title: 'Gertjan Reynaert'
  };

  render() {
    return (
      <UserProfileContainer
        user="GertjanReynaert"
        goTo={user => this.props.navigation.navigate('User', { user })}
      />
    );
  }
}

const Navigation = StackNavigator({
  Profile: { screen: Profile },
  User: { screen: UserNavigationWrapper }
});

export default Navigation;
