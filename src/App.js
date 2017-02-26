import React, { Component } from 'react';
import type { Element } from 'react';
import { View } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import fetchMiddleware from './fetchMiddleware';

import Session from './scenes/Session/container';
import reducers from './reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: () => __DEV__
});

const store = createStore(reducers, applyMiddleware(fetchMiddleware, logger));

type Props = {
  children: Element
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Session />
      </Provider>
    );
  }
}

export default App;
