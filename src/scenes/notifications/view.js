// @flow
import React, { Component, PropTypes } from 'react';
import { View, ListView, ActivityIndicator, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-refetch';

import notificationsIcon from '../../assets/notifications.png';

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
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

    console.log(JSON.stringify(this.props.notifications.value[0], null, 2));

    const notifications = this.dataSource.cloneWithRows(this.props.notifications.value);

    return (
      <View style={{ paddingTop: 25 }}>
        <ListView
          style={{}}
          dataSource={notifications}
          renderRow={
            ({ subject }) => (
              <Text>{subject.title}</Text>
            )
          }
        />
      </View>
    );
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
