// @flow

import React, { Component, PropTypes } from 'react';

import OAuthManager from 'react-native-oauth';
import { connect } from 'react-refetch';

import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '../../../env';

import Login from './view';
import TabNavigation from '../Navigation';

const manager = new OAuthManager('ghnotifications');

manager.configure({
  github: {
    client_id: GITHUB_CLIENT_ID,
    client_secret: GITHUB_CLIENT_SECRET,
  },
});

type Props = {
  getNotifications: () => void,
};

class GithubNotifications extends Component {
  props: Props;
  static childContextTypes = {
    accessToken: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      accessToken: undefined,
    };
  }

  getChildContext() {
    return {
      accessToken: this.state.accessToken,
    };
  }

  componentWillMount() {
    manager.savedAccounts()
    .then(({ accounts }) => {
      const account = accounts.find(acnt => acnt.provider === 'github');
      this.setState({ accessToken: account.response.credentials.accessToken });
    });
  }

  componentWillUnmount() {
    manager.deauthorize('github');
  }

  render() {
    const authorize = () => {
      manager.authorize('github', { scopes: 'notifications' })
        .then((resp) => { this.setState({ accessToken: resp.response.credentials.accessToken }); })
        .catch(err => console.log('There was an error', err));
    };

    if (this.state.accessToken === undefined) {
      return (
        <Login
          login={(username, password) => this.props.getNotifications({ username, password })}
          oAuthLogin={authorize}
        />
      );
    }

    return (
      <TabNavigation />
    );
  }
}

export default connect(() => ({
  getNotifications: ({ username, password }) => ({
    notifications: {
      url: 'https://api.github.com/users/notifications',
      headers: {
        Host: 'api.github.com',
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    },
  }),
}))(GithubNotifications);
