import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo/Logo';

import {loginUser} from '../../services/api';
import {localRead, localSave} from '../../services/storage';
import {errorHandler} from '../../services/errorHandler';
import store from '../../state/store';

import styles from './Login.css';

@observer
class Login extends Component {

  @action.bound _validateLoginForm(email, password) {
    let formIsValid = true;

    if (email === '') {
      store.storeState.loginMessage = 'Empty email address!';
      formIsValid = false;
    }

    if (password === '') {
      store.storeState.loginMessage = 'Empty password!';
      formIsValid = false;
    }

    return formIsValid;
  }

  @action.bound _loginUser(email, password) {
    if (!this._validateLoginForm(email, password)) {
      return;
    }

    loginUser({email, password})
    .then((result) => {
      if (typeof result.errors !== 'undefined') {
        store.storeState.loginMessage = errorHandler(result.errors);
        return;
      }
      store.storeState.loginMessage = 'Logged in';
      store.storeState.loginEmail = email;
      browserHistory.push('/home');
    })
    .catch((error) => {
      const errorMessage = `Error: ${error}`;
      store.storeState.loginMessage = errorMessage;
    });
  }

  render() {
    return (
      <div>
        <Logo />
        <LoginForm
          onSubmit={this._loginUser} />
        <div id="message" className={styles.message}>{store.storeState.loginMessage}</div>
      </div>
    );
  }
}

export default Login;
