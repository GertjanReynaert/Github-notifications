// @flow
import React, { Component, PropTypes } from 'react';
import { ListView, ActivityIndicator } from 'react-native';
import { connect } from 'react-refetch';

import NotificationEntry from './NotificationEntry';

type Props = {
  notifications: {
    pending: Boolean,
    value: Array<Object>,
  },
};

class Notifications extends Component {
  props: Props

  static contextTypes = {
    accessToken: PropTypes.string,
  }

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.id !== row2.id,
    });
  }

  render() {
    if (this.props.notifications.pending) {
      return <ActivityIndicator small />;
    }

    const notifications = this.dataSource.cloneWithRows(this.props.notifications.value);

    return (
      <ListView
        dataSource={notifications}
        renderRow={notification => <NotificationEntry notification={notification} />}
      />
    );
  }
}

export default connect((props, context) => ({
  notifications: ({
    url: `https://api.github.com/notifications?${props.tab}=true`,
    headers: {
      Authorization: `token ${context.accessToken}`,
    },
  }),
}))(Notifications);
