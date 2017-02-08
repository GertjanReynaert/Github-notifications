import { TabNavigator } from 'react-navigation';

import Notifications from './notifications/view';
import Profile from './profile/Navigation';

const Navigation = TabNavigator({
  Notifications: { screen: Notifications },
  Profile: { screen: Profile },
});

export default Navigation;
