import React, { Component } from 'react';
import type { Element } from 'react';
import { View } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import fetchMiddleware from './fetchMiddleware';

import UserProfileContainer from './UserProfileContainer';
import reducer from './reducer';

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: () => __DEV__
});

const store = createStore(reducer, applyMiddleware(fetchMiddleware, logger));

type Props = {
  children: Element
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UserProfileContainer user="gertjanreynaert" />
      </Provider>
    );
  }
}

export default App;
