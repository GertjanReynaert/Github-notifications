// @flow
import React, { Component, PropTypes } from 'react';
import { View, Image, SegmentedControlIOS, StyleSheet } from 'react-native';
import { connect } from 'react-refetch';

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
  tabs: {
    margin: 15,
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
        <SegmentedControlIOS
          style={styles.tabs}
          values={['All', 'Participating']}
          selectedIndex={this.state.activeTab}
          onChange={(event) => {
            this.setState({ activeTab: event.nativeEvent.selectedSegmentIndex });
          }}
        />

        <NotificationList tab={this.state.activeTab === 0 ? 'all' : 'participating'} />
      </View>
    );
  }
}

export default Notifications;
