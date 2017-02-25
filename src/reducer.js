const initialState = {
  GET_USER: [],
  GET_FOLLOWERS_FOR_USER: []
};

export default (state = initialState, action) => {
  if (action.type === 'GET_USER_SUCCESS') {
    return {
      ...state,
      GET_USER: [
        ...state.GET_USER,
        {
          status: 'ok',
          ...action.payload
        }
      ]
    };
  }

  if (action.type === 'GET_USER_FAILURE') {
    return {
      ...state,
      GET_USER: [
        ...state.GET_USER,
        {
          status: 'rejected',
          ...action.payload
        }
      ]
    };
  }

  if (action.type === 'GET_FOLLOWERS_FOR_USER_SUCCESS') {
    return {
      ...state,
      GET_FOLLOWERS_FOR_USER: [
        ...state.GET_FOLLOWERS_FOR_USER,
        {
          status: 'ok',
          ...action.payload
        }
      ]
    };
  }

  if (action.type === 'GET_FOLLOWERS_FOR_USER_FAILURE') {
    return {
      ...state,
      GET_FOLLOWERS_FOR_USER: [
        ...state.GET_FOLLOWERS_FOR_USER,
        {
          status: 'rejected',
          ...action.payload
        }
      ]
    };
  }

  return state;
};
