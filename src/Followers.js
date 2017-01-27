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
  followers: {
    pending: Boolean,
    rejected: Boolean,
    value: Array<Object>,
  },
};

class Followers extends Component {
  props: Props
  constructor(props) {
    super(props);
    this.state = {
      user: 'GertjanReynaert',
    };
  }

  renderFollowers() {
    // Should be a separate component!
    if (this.props.followers.pending) {
      return <ActivityIndicator small />;
    }

    if (this.props.followers.rejected) {
      return (
        <Text>
          Error: {JSON.stringify(this.state.error, null, 2)}
        </Text>
      );
    }

    return (
      <View>
        <Text>
          Followers: {this.props.followers.value.length}
        </Text>
        <View style={styles.followersList}>
          {
            this.props.followers.value.map(follower => (
              <Image source={{ uri: follower.avatar_url }} style={styles.avatar} />
            ))
          }
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>
          User: { this.state.user }
        </Text>
        {
          this.renderFollowers()
        }
      </View>
    );
  }
}

export default connect(() => ({
  followers: 'https://api.github.com/users/GertjanReynaert/followers',
}))(Followers);
