import React from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Profile from './profile/Navigation';

const Navigation = TabNavigator({
  Notifications: { screen: () => <Text>Notifications</Text> },
  Profile: { screen: Profile },
});

export default Navigation;
