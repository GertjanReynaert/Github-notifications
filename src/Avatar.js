// @flow
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    width: 75,
    height: 75,
    margin: 4,
    borderRadius: 5
  }
});

type Props = {
  url: string
};

class Avatar extends Component {
  props: Props;

  render() {
    return <Image source={{ uri: this.props.url }} style={styles.avatar} />;
  }
}

export default Avatar;
