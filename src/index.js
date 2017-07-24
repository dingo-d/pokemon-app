import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Login from './pages/Login';
import Register from './pages/Register';
import './css/Application.css';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
<Route path="/register" component={Register} />
  </Router>,
  document.getElementById('app')
);