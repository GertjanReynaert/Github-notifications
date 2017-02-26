const initialState = [];

export default (state = initialState, action) => {
  if (action.type === 'GET_NOTIFICATIONS_SUCCESS') {
    return [
      ...state,
      {
        status: 'ok',
        ...action.payload
      }
    ];
  }

  if (action.type === 'GET_NOTIFICATIONS_FAILURE') {
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
