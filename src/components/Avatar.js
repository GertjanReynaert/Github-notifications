// @flow
import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    width: 75,
    height: 75,
    margin: 4,
    borderRadius: 5
  }
});

type Props = {
  touchable?: boolean,
  onPress: () => void,
  url: string
};

class Avatar extends Component {
  props: Props;

  render() {
    if (this.props.touchable) {
      return (
        <TouchableOpacity
          style={styles.avatar}
          onPress={() => this.props.onPress()}
        >
          <Image style={styles.avatar} source={{ uri: this.props.url }} />
        </TouchableOpacity>
      );
    }

    return <Image source={{ uri: this.props.url }} style={styles.avatar} />;
  }
}

export default Avatar;
