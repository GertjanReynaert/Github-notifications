/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
import { View, Text, Button, AppRegistry } from 'react-native';
// import { StackNavigator } from 'react-navigation';
// import FollowersNavigationWrapper from './src/FollowersNavigationWrapper';
// import Followers from './src/Followers';
// import OAuthManager from 'react-native-oauth';
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

// AppRegistry.registerComponent('github_notifications', () => Navigation);

// const manager = new OAuthManager('ghnotifications');
// manager.configure({
//   github: {
//     client_id: '9c60d68459c805cd2b58',
//     client_secret: 'dfd27c57a4ae148a280cd89826650235460de016',
//   },
// });

// class GithubNotifications extends Component {
//   authorize() {
//     console.log('enter authorize');
//     manager.authorize('github')
//       .then(resp => console.log('Your users ID', resp))
//       .catch(err => console.log('There was an error', err));
//   }

//   render() {
//     return (
//       <View style={{ padding: 50 }}>
//         <Text>Github login oauth test</Text>
//         <Button onPress={() => this.authorize()} title="Login" />
//       </View>
//     );
//   }
// }

AppRegistry.registerComponent('github_notifications', () => Login);
