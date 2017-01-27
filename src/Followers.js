// @flow
import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

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

class Followers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'GertjanReynaert',
      followers: null,
    };
  }

  componentWillMount() {
    this.setState({ status: 'loading' });
    fetch(`https://api.github.com/users/${this.state.user}/followers`)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          status: 'success',
          followers: responseJson,
        });
      })
      .catch((error) => {
        this.setState({
          status: 'error',
          error,
        });
      });
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>
          User: { this.state.user }
        </Text>
        {
          this.state.status === 'loading' && <ActivityIndicator small />
        }
        {
          this.state.status === 'error' && (
            <Text>
              Error: {JSON.stringify(this.state.error, null, 2)}
            </Text>
          )
        }
        {
          this.state.status === 'success' && (
            <View>
              <Text>
                Followers: {this.state.followers.length}
              </Text>
              <View style={styles.followersList}>
                {
                  this.state.followers.map(follower => (
                    <Image source={{ uri: follower.avatar_url }} style={styles.avatar} />
                  ))
                }
              </View>
            </View>
          )
        }
      </View>
    );
  }
}

export default Followers;
