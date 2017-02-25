// @flow
import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-refetch';

const styles = StyleSheet.create({
  view: {
    padding: 20,
    paddingTop: 35,
  },
  followersList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  avatar: {
    width: 75,
    height: 75,
    margin: 4,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  userLeft: {
    flex: 2,
  },
  userRight: {
    flex: 5,
  },
});

type Props = {
  goTo: () => void,
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
          Error: {JSON.stringify(this.props.followers, null, 2)}
        </Text>
      );
    }

    return (
      <View style={styles.followersList}>
        {
          this.props.followers.value.map(follower => (
            <TouchableHighlight
              key={follower.id}
              style={styles.avatar}
              onPress={() => this.props.goTo(follower.login)}
            >
              <Image
                source={{ uri: follower.avatar_url }}
                style={styles.avatar}
              />
            </TouchableHighlight>
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
          Error: {JSON.stringify(this.props.followers, null, 2)}
        </Text>
      );
    }

    const user = this.props.userInfo.value;

    return (
      <View style={styles.userInfo}>
        <View style={styles.userLeft}>
          <Image
            source={{ uri: user.avatar_url }}
            style={styles.avatar}
          />
        </View>
        <View style={styles.userRight}>
          <Text>Bio:</Text>
          <Text>
            { user.bio }
          </Text>
          <Text>
            Followers: {user.followers}
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.view}>
        { this.renderUserInfo() }
        { this.renderFollowers() }
      </ScrollView>
    );
  }
}

export default connect(props => ({
  userInfo: `https://api.github.com/users/${props.user}`,
  followers: `https://api.github.com/users/${props.user}/followers`,
}))(Followers);
