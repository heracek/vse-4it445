import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';

import { createRoutes } from './createRoutes.js';
import { configureStore } from './store/configureStore.js';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export class App extends Component {
  render() {
    const store = configureStore();
    const routes = createRoutes();

    return (
      <Provider store={store}>
        <Router
          history={browserHistory}
          render={applyRouterMiddleware(useScroll())}
        >
          {routes}
        </Router>
      </Provider>
    );
  }
}
