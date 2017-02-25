export default store => next => action => {
  if (action.type !== 'FETCH') return next(action);

  next({ type: `${action.payload.fetchId}_REQUEST` });

  return fetch(action.payload.url, { method: action.payload.method })
    .then(response => response.json().then(json => ({ response, json })))
    .then(({ response, json }) => {
      if (!response.ok) {
        next({
          type: `${action.payload.fetchId}_FAILURE`,
          payload: {}
        });
      }

      next({
        type: `${action.payload.fetchId}_SUCCESS`,
        payload: {
          request: action.payload,
          response: json
        }
      });
    });
};
