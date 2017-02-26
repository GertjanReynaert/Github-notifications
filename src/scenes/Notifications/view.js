import React, { Component } from 'react';
import { Text } from 'react-native';

import Profiles from '../Profiles';
import Notifications from '../Notifications/container';

export default class Session extends Component {
  componentWillMount() {
    this.props.getNotifications(this.props.accessToken);
  }

  render() {
    return <Text>{JSON.stringify(this.props)}</Text>;
  }
}
