// @flow
import React, { Component, PropTypes } from 'react';
import { Text, ListView, ActivityIndicator } from 'react-native';

import Notification from './Notification';

type Props = {
  tab: string,
  getNotifications: () => void,
  accessToken: string,
  notifications: typeof undefined | Array<Object>
};

class Notifications extends Component {
  props: Props;

  componentWillMount() {
    this.props.getNotifications(this.props.tab, this.props.accessToken);

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.id !== row2.id
    });
  }

  componentWillReceiveProps(newProps) {
    this.props.getNotifications(newProps.tab, newProps.accessToken);
  }

  render() {
    if (this.props.notifications === undefined) {
      return <ActivityIndicator small />;
    }

    if (this.props.errors) {
      return <Text>{JSON.stringify(this.props.errors)}</Text>;
    }

    const notifications = this.dataSource.cloneWithRows(
      this.props.notifications
    );

    return (
      <ListView
        dataSource={notifications}
        renderRow={notification => <Notification notification={notification} />}
      />
    );
  }
}

export default Notifications;
