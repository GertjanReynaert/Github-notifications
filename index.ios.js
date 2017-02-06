/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
// import { StackNavigator } from 'react-navigation';
// import FollowersNavigationWrapper from './src/FollowersNavigationWrapper';
// import Followers from './src/Followers';
import OAuthManager from 'react-native-oauth';
import Login from './src/scenes/Login';

// type Props = {
//   navigation: Object,
// };

// class GithubNotifications extends Component {
//   props: Props

//   static navigationOptions = {
//     title: 'GertjanReynaert',
//   };

//   render() {
//     return (
//       <Followers
//         user="GertjanReynaert"
//         goTo={user => this.props.navigation.navigate('User', { user })}
//       />
//     );
//   }
// }

// const Navigation = StackNavigator({
//   Initial: { screen: GithubNotifications },
//   User: { screen: FollowersNavigationWrapper },
// });

const manager = new OAuthManager('ghnotifications');
manager.configure({
  github: {
    client_id: '9c60d68459c805cd2b58',
    client_secret: 'dfd27c57a4ae148a280cd89826650235460de016',
  },
});

class GithubNotifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accessToken: undefined,
    };
  }

  render() {
    const authorize = () => {
      console.log('enter authorize');
      manager.authorize('github')
        .then(resp => console.log('Your users ID', resp))
        .catch(err => console.log('There was an error', err));
    };

    if (this.state.accessToken === undefined) {
      return (
        <Login
          login={(...props) => { console.log(props)}}
          oAuthLogin={() => this.authorize()}
        />
      );
    }

    return (
      <Text>Authorised root view</Text>
    );
  }
}

AppRegistry.registerComponent('github_notifications', () => GithubNotifications);
