// @flow
import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-refetch';

const styles = StyleSheet.create({
  view: {
    padding: 20,
    paddingTop: 35,
  },
  followersList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  avatar: {
    width: 75,
    height: 75,
  },
});

type Props = {
  userInfo: {
    pending: Boolean,
    rejected: Boolean,
    value: Array<Object>,
  },
  followers: {
    pending: Boolean,
    rejected: Boolean,
    value: Array<Object>,
  },
};

class Followers extends Component {
  props: Props

  renderFollowers() {
    // Should be a separate component!
    if (this.props.followers.pending) {
      return <ActivityIndicator small />;
    }

    if (this.props.followers.rejected) {
      return (
        <Text>
          Error: {JSON.stringify(this.props.followers.value, null, 2)}
        </Text>
      );
    }

    return (
      <View style={styles.followersList}>
        {
          this.props.followers.value.map(follower => (
            <Image key={follower.id} source={{ uri: follower.avatar_url }} style={styles.avatar} />
          ))
        }
      </View>
    );
  }

  renderUserInfo() {
    // Should be a separate component!
    if (this.props.userInfo.pending) {
      return <ActivityIndicator small />;
    }

    if (this.props.userInfo.rejected) {
      return (
        <Text>
          Error: {JSON.stringify(this.props.followers.value, null, 2)}
        </Text>
      );
    }

    return (
      <View>
        <Text>
          User: { this.props.userInfo.value.name }
        </Text>
        <Text>
          Followers: {this.props.userInfo.value.followers}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.view}>
        { this.renderUserInfo() }
        { this.renderFollowers() }
      </View>
    );
  }
}

export default connect(props => ({
  userInfo: `https://api.github.com/users/${props.user}`,
  followers: `https://api.github.com/users/${props.user}/followers`,
}))(Followers);
