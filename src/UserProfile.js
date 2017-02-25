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
  user: string
};

class UserProfile extends Component {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        pending: true,
        rejected: undefined,
        value: undefined
      },
      followers: {
        pending: true,
        rejected: undefined,
        value: undefined
      }
    };
  }

  componentWillMount() {
    fetch(`https://api.github.com/users/${this.props.user}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          userInfo: {
            pending: false,
            value: responseJson
          }
        });
      })
      .catch(error => {
        this.setState({
          userInfo: {
            pending: false,
            rejected: error
          }
        });
      });

    fetch(`https://api.github.com/users/${this.props.user}/followers`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          followers: {
            pending: false,
            value: responseJson
          }
        });
      })
      .catch(error => {
        this.setState({
          followers: {
            pending: false,
            rejected: error
          }
        });
      });
  }

  renderUserInfo() {
    // Should be a separate component!
    if (this.state.userInfo.pending) {
      return <ActivityIndicator small />;
    }

    if (this.state.userInfo.rejected) {
      return (
        <Text>
          Error: {JSON.stringify(this.state.userInfo.rejected, null, 2)}
        </Text>
      );
    }

    const user = this.state.userInfo.value;

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
    if (this.state.followers.pending) {
      return <ActivityIndicator small />;
    }

    if (this.state.followers.rejected) {
      return (
        <Text>
          Error: {JSON.stringify(this.state.followers.rejected, null, 2)}
        </Text>
      );
    }

    return (
      <View style={styles.followersList}>
        {this.state.followers.value.map(follower => (
          <Avatar key={follower.id} url={follower.avatar_url} />
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
