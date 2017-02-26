import React, { Component } from 'react';

import Notifications from '../Notifications/container';
import Login from '../Login/container';

export default class Session extends Component {
  render() {
    if (this.props.accessToken) {
      return <Notifications />;
    }

    return <Login />;
  }
}
