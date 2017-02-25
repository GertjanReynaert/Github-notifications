// @flow

import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Avatar from './Avatar';

const styles = StyleSheet.create({
  view: {
    padding: 20,
    paddingTop: 35
  },
  followersList: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15
  },
  userLeft: {
    flex: 2
  },
  userRight: {
    flex: 5
  }
});

type Props = {
  getUser: () => void,
  getFollowersForUser: () => void,
  user: Object,
  followers: Object
};

class UserProfile extends Component {
  props: Props;

  componentWillMount() {
    this.props.getUser();
    this.props.getFollowersForUser();
  }

  renderUserInfo() {
    // Should be a separate component!
    if (this.props.user.pending) {
      return <ActivityIndicator small />;
    }

    if (this.props.user.rejected) {
      return (
        <Text>
          Error: {JSON.stringify(this.props.user.rejected, null, 2)}
        </Text>
      );
    }

    const user = this.props.user.value;

    return (
      <View style={styles.userInfo}>
        <View style={styles.userLeft}>
          <Avatar url={user.avatar_url} />
        </View>
        <View style={styles.userRight}>
          <Text>Bio:</Text>
          <Text>
            {user.bio}
          </Text>
          <Text>
            Followers: {user.followers}
          </Text>
        </View>
      </View>
    );
  }

  renderFollowers() {
    // Should be a separate component!
    if (this.props.followers.pending) {
      return <ActivityIndicator small />;
    }

    if (this.props.followers.rejected) {
      return (
        <Text>
          Error: {JSON.stringify(this.props.followers.rejected, null, 2)}
        </Text>
      );
    }

    return (
      <View style={styles.followersList}>
        {this.props.followers.value.map(follower => (
          <Avatar
            touchable
            onPress={() => console.log(follower.login)}
            url={follower.avatar_url}
            key={follower.id}
          />
        ))}
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.view}>
        {this.renderUserInfo()}
        {this.renderFollowers()}
      </ScrollView>
    );
  }
}

export default UserProfile;
