// @flow
import React, { Component } from 'react';
import { View, SegmentedControlIOS, StyleSheet } from 'react-native';

import NotificationListContainer from './NotificationListContainer';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  },
  wrapper: {
    flex: 1,
    paddingTop: 25
  },
  tabs: {
    margin: 15
  }
});

type Props = {
  notifications: {
    pending: Boolean,
    value: Array<Object>
  }
};

class Notifications extends Component {
  props: Props;
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <SegmentedControlIOS
          style={styles.tabs}
          values={['All', 'Participating']}
          selectedIndex={this.state.activeTab}
          onChange={event => {
            this.setState({
              activeTab: event.nativeEvent.selectedSegmentIndex
            });
          }}
        />

        <NotificationListContainer
          tab={this.state.activeTab === 0 ? 'all' : 'participating'}
        />
      </View>
    );
  }
}

export default Notifications;
