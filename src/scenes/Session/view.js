import React, { Component } from 'react';

import Profiles from '../Profiles';
import Login from '../Login/container';

export default class Session extends Component {
  render() {
    if (this.props.accessToken) {
      return <Profiles user="gertjanreynaert" />;
    }

    return <Login />;
  }
}
