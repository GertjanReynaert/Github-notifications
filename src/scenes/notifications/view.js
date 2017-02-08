// @flow
import React, { Component, PropTypes } from 'react';
import { Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-refetch';

import notifications from '../../assets/notifications.png';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

class Notifications extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Notifications',
      icon: ({ tintColor }) => (
        <Image source={notifications} style={[styles.icon, { tintColor }]} />
      ),
    },
  }

  static contextTypes = {
    accessToken: PropTypes.string,
  }

  render() {
    console.log(this.props.notifications);
    if (this.props.notifications.pending) {
      return <ActivityIndicator small />;
    }

    return <Text style={{ padding: 25 }}>{JSON.stringify(this.props.notifications.value[0])}</Text>;
  }
}

export default connect((props, context) => ({
  notifications: {
    url: 'https://api.github.com/notifications?all=true',
    headers: {
      Authorization: `token ${context.accessToken}`,
    },
  },
}))(Notifications);
