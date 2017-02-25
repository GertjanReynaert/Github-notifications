import { connect } from 'react-redux';

import UserProfile from './UserProfile';

const mapStateToProps = state => {
  return {
    user: state.GET_USER,
    followers: state.GET_FOLLOWERS_FOR_USER
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  getUser: () => dispatch({
    type: 'FETCH',
    payload: {
      fetchId: 'GET_USER',
      url: `https://api.github.com/users/${props.user}`,
      method: 'GET'
    }
  }),
  getFollowersForUser: () => dispatch({
    type: 'FETCH',
    payload: {
      fetchId: 'GET_FOLLOWERS_FOR_USER',
      url: `https://api.github.com/users/${props.user}/followers`,
      method: 'GET'
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
