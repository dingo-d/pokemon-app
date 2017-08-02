import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import SinglePokemon from './pages/SinglePokemon/SinglePokemon';
import './css/Application.css';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/home" component={Home} />
    <Route path="/pokemon/:id" component={SinglePokemon} />
  </Router>,
  document.getElementById('app')
);
