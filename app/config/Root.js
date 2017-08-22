import React, { Component } from 'react';
import { Router, Route, useRouterHistory, browserHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from '../components/App';

export default class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
      </Router>
    );
  }
}

