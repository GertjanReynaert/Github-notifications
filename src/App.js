import React, { Component } from 'react';
import type { Element } from 'react';
import { View } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import fetchMiddleware from './fetchMiddleware';

import Profiles from './Profiles';
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
        <Profiles user="gertjanreynaert" />
      </Provider>
    );
  }
}

export default App;
