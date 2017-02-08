// @flow
import React, { Component, PropTypes } from 'react';
import { View, ListView, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { connect } from 'react-refetch';

import notificationsIcon from '../../assets/notifications.png';

import NotificationEntry from './NotificationEntry';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  wrapper: {
    paddingTop: 25,
  },
});

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

  static navigationOptions = {
    tabBar: {
      label: 'Notifications',
      icon: ({ tintColor }) => (
        <Image source={notificationsIcon} style={[styles.icon, { tintColor }]} />
      ),
    },
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
      <View style={styles.wrapper}>
        <ListView
          dataSource={notifications}
          renderRow={notification => <NotificationEntry notification={notification} />}
        />
      </View>
    );
  }
}

export default connect((props, context) => ({
  notifications: {
    url: 'https://api.github.com/notifications',
    headers: {
      Authorization: `token ${context.accessToken}`,
    },
  },
}))(Notifications);
