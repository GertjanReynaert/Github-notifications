// @flow
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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
    fetch(`https://api.github.com/users/${this.state.user}/followers`)
      .then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({ followers: responseJson });
      })
      .catch((error) => { console.error(error); });
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>
          User: { this.state.user }
        </Text>
        <Text>
          Followers: { this.state.followers ? this.state.followers.length : '...Loading' }
        </Text>
        <View style={styles.followersList}>
          {
            this.state.followers
            ? this.state.followers.map(follower => (
              <Image source={{ uri: follower.avatar_url }} style={styles.avatar} />
            ))
            : <View />
          }
        </View>
      </View>
    );
  }
}

export default Followers;
