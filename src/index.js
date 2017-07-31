import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import './css/Application.css';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/home" component={Home} />
  </Router>,
  document.getElementById('app')
);
