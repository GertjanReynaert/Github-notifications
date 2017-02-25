// @flow
import React, { Component, PropTypes } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import SegmentedControl from '../../components/SegmentedControl';

import notificationsIcon from '../../assets/notifications.png';

import NotificationList from './NotificationList';

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

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <SegmentedControl
          style={styles.tabs}
          values={['All', 'Participating']}
          selectedIndex={this.state.activeTab}
          onChange={(index) => {
            this.setState({ activeTab: index });
          }}
        />

        <NotificationList tab={this.state.activeTab === 0 ? 'all' : 'participating'} />
      </View>
    );
  }
}

export default Notifications;
