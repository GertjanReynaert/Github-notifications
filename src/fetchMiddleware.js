export default store => next => action => {
  if (action.type !== 'FETCH') return next(action);

  next({ type: `${action.payload.fetchId}_REQUEST` });

  return fetch(action.payload.url, {
    method: action.payload.method,
    headers: action.payload.headers
  })
    .then(response => response.json().then(json => ({ response, json })))
    .then(({ response, json }) => {
      if (!response.ok) {
        next({
          type: `${action.payload.fetchId}_FAILURE`,
          payload: {
            request: action.payload,
            response: json
          }
        });
        return;
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
