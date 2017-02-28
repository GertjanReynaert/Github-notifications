import React, { Component } from 'react';

import Notifications from '../Notifications/view';
import Login from '../Login/container';

export default class Session extends Component {
  render() {
    if (this.props.accessToken) {
      return <Notifications />;
    }

    return <Login />;
  }
}
