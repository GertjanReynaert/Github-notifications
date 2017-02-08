// @flow
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import issueIcon from '../../assets/octicons_4-3-0_issue-opened_128_0_000000_none.png';
import pullRequestIcon from '../../assets/octicons_4-3-0_git-pull-request_128_0_000000_none.png';
import commitIcon from '../../assets/octicons_4-3-0_git-commit_128_0_000000_none.png';
import face from '../../assets/octicons_4-3-0_octoface_128_0_000000_none.png';
import checkMark from '../../assets/octicons_4-3-0_check_128_0_000000_none.png';

const red = '#BF3409';
const green = '#71C84B';
const blue = '#4078C0';
const lightgray = '#EEEEEE';
const gray = '#CCCCCC';
const darkgray = '#767676';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: lightgray,
    padding: 15,
  },
  left: {
    flex: 9,
    flexDirection: 'row',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 10,
    tintColor: gray,
  },
  text: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 7,
    color: blue,
  },
  info: {
    color: darkgray,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  iconRight: {
    marginRight: 0,
    tintColor: gray,
  },
});

type Props = {
  notification: {
    repository: {
      owner: {
        login: string,
      },
    },
    subject: {
      title: string,
      type: string,
    },
    updated_at: string,
  },
};

class NotificationEntry extends Component {
  props: Props

  render() {
    console.log(this.props.notification);

    const { updated_at, repository, subject } = this.props.notification;
    const { type, title } = subject;

    const iconsForType = {
      Issue: {
        icon: issueIcon,
        color: green,
      },
      PullRequest: {
        icon: pullRequestIcon,
        color: red,
      },
      Commit: {
        icon: commitIcon,
        color: gray,
      },
    };

    const icon = iconsForType[type] || { icon: face, color: blue };
    const date = updated_at.substring(0, 10);
    const username = repository.owner.login;

    return (
      <View style={styles.wrapper}>
        <View style={styles.left}>
          <Image source={icon.icon} style={[styles.icon, { tintColor: icon.color }]} />
          <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.info}>Updated { date } by {username}</Text>
          </View>
        </View>

        <View style={styles.right}>
          <Image source={checkMark} style={[styles.icon, styles.iconRight]} />
        </View>
      </View>
    );
  }
}

export default NotificationEntry;
