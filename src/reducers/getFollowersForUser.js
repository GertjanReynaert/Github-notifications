const initialState = [];

export default (state = initialState, action) => {
  if (action.type === 'GET_FOLLOWERS_FOR_USER_SUCCESS') {
    return [
      ...state,
      {
        status: 'ok',
        ...action.payload
      }
    ];
  }

  if (action.type === 'GET_FOLLOWERS_FOR_USER_FAILURE') {
    return [
      ...state,
      {
        status: 'rejected',
        ...action.payload
      }
    ];
  }

  return state;
};
