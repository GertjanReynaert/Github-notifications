// @flow

import React, { Component, PropTypes } from 'react';

import { Buffer } from 'buffer';
import OAuthManager from 'react-native-oauth';
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
      if (account) {
        this.setOauthToken(account.response.credentials.accessToken);
      }
    })
    .catch(err => console.log('retrieve savedAccounts error:', err));
  }

  componentWillUnmount() {
    manager.deauthorize('github');
  }

  setBasicToken(username, password) {
    const tokenBuffer = new Buffer(`${username}:${password}`);
    const token = tokenBuffer.toString('base64');

    this.setState({ accessToken: `basic ${token}` });
  }

  setOauthToken(token) {
    this.setState({ accessToken: `token ${token}` });
  }

  render() {
    const authorize = () => {
      manager.authorize('github', { scopes: 'notifications' })
        .then((resp) => {
          this.setOauthToken(resp.response.credentials.accessToken);
        })
        .catch(err => console.log('There was an error', err));
    };

    if (this.state.accessToken === undefined) {
      return (
        <Login
          login={(username, password) => this.setBasicToken(username, password)}
          oAuthLogin={authorize}
        />
      );
    }

    return (
      <TabNavigation />
    );
  }
}

export default GithubNotifications;
