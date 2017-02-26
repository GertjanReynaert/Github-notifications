import { combineReducers } from 'redux';

import getUser from './getUser';
import getFollowersForUser from './getFollowersForUser';
import getNotifications from './getNotifications';
import session from './session';

export default combineReducers({
  GET_USER: getUser,
  GET_FOLLOWERS_FOR_USER: getFollowersForUser,
  GET_NOTIFICATIONS: getNotifications,
  session
});
