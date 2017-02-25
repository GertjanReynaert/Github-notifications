const initialState = {
  GET_USER: {
    pending: true,
    rejected: undefined,
    value: undefined
  },
  GET_FOLLOWERS_FOR_USER: {
    pending: true,
    rejected: undefined,
    value: undefined
  }
};

export default (state = initialState, action) => {
  if (action.type === 'GET_USER_REQUEST') {
    return {
      ...state,
      GET_USER: {
        pending: true,
        rejected: undefined,
        value: undefined
      }
    };
  }

  if (action.type === 'GET_USER_SUCCESS') {
    return {
      ...state,
      GET_USER: {
        pending: false,
        rejected: undefined,
        value: action.payload
      }
    };
  }

  if (action.type === 'GET_USER_FAILURE') {
    return {
      ...state,
      GET_USER: {
        pending: false,
        rejected: action.payload,
        value: undefined
      }
    };
  }

  if (action.type === 'GET_FOLLOWERS_FOR_USER_REQUEST') {
    return {
      ...state,
      GET_FOLLOWERS_FOR_USER: {
        pending: true,
        rejected: undefined,
        value: undefined
      }
    };
  }

  if (action.type === 'GET_FOLLOWERS_FOR_USER_SUCCESS') {
    return {
      ...state,
      GET_FOLLOWERS_FOR_USER: {
        pending: false,
        rejected: undefined,
        value: action.payload
      }
    };
  }

  if (action.type === 'GET_FOLLOWERS_FOR_USER_FAILURE') {
    return {
      ...state,
      GET_FOLLOWERS_FOR_USER: {
        pending: false,
        rejected: action.payload,
        value: undefined
      }
    };
  }

  return state;
};
