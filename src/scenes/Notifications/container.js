import { connect } from 'react-redux';
import Notifications from './view';

const mapStateToProps = state => {
  const notifications = state.GET_NOTIFICATIONS.reverse()[0];

  const errors = notifications && notifications.status === 'rejected'
    ? notifications.response
    : undefined;

  return {
    accessToken: state.session.accessToken,
    notifications: notifications ? notifications.response : undefined,
    errors
  };
};

const mapDispatchToProps = {
  getNotifications: accessToken => ({
    type: 'FETCH',
    payload: {
      fetchId: 'GET_NOTIFICATIONS',
      url: `https://api.github.com/notifications`,
      headers: {
        Authorization: accessToken
      },
      method: 'GET'
    }
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
