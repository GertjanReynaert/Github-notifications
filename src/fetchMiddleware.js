export default store => next => action => {
  if (action.type !== 'FETCH') return next(action);

  next({ type: `${action.payload.fetchId}_REQUEST` });

  return fetch(action.payload.url, { method: action.payload.method })
    .then(response => response.json())
    .then(responseJson => {
      next({
        type: `${action.payload.fetchId}_SUCCESS`,
        payload: responseJson
      });
    })
    .catch(error => {
      next({
        type: `${action.payload.fetchId}_FAILURE`,
        payload: {
          error
        }
      });
    });
};
