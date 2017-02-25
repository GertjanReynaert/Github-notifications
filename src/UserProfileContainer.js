import { connect } from 'react-redux';

import UserProfile from './UserProfile';

const mapStateToProps = (state, props) => {
  const user = state.GET_USER
    .reverse()
    .find(networkCall => networkCall.request.username === props.user);

  const followers = state.GET_FOLLOWERS_FOR_USER
    .reverse()
    .find(networkCall => networkCall.request.username === props.user);

  const errors = user && user.status === 'rejected' ||
    followers && followers.status === 'rejected';

  return {
    username: props.user,
    user: user ? user.response : undefined,
    followers: followers ? followers.response : undefined,
    errors
  };
};

const mapDispatchToProps = {
  getUser: user => ({
    type: 'FETCH',
    payload: {
      fetchId: 'GET_USER',
      url: `https://api.github.com/users/${user}`,
      method: 'GET',
      username: user
    }
  }),
  getFollowersForUser: user => ({
    type: 'FETCH',
    payload: {
      fetchId: 'GET_FOLLOWERS_FOR_USER',
      url: `https://api.github.com/users/${user}/followers`,
      method: 'GET',
      username: user
    }
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
