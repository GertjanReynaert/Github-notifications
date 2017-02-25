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
import Avatar from './components/Avatar';

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
  username: string,
  user: typeof undefined | Object,
  followers: typeof undefined | Object,
  errors: boolean,
  getUser: () => void,
  getFollowersForUser: () => void,
  goTo: () => void
};

class UserProfile extends Component {
  props: Props;

  componentWillMount() {
    this.props.getUser(this.props.username);
    this.props.getFollowersForUser(this.props.username);
  }

  renderUserInfo() {
    // Should be a separate component!
    if (this.props.user === undefined) {
      return <ActivityIndicator small />;
    }

    const user = this.props.user;

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
    if (this.props.followers === undefined) {
      return <ActivityIndicator small />;
    }

    return (
      <View style={styles.followersList}>
        {this.props.followers.map(follower => (
          <Avatar
            touchable
            onPress={() => this.props.goTo(follower.login)}
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
        {this.props.errors ? <Text>An error has occured</Text> : null}
      </ScrollView>
    );
  }
}

export default UserProfile;
