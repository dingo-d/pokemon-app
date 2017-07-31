import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Logo from '../../components/Logo/Logo';

import {registerUser} from '../../services/api';
import {localSave} from '../../services/storage';
import {errorHandler} from '../../services/errorHandler';

import store from '../../state/store';

import styles from './Register.css';

@observer
class Register extends Component {

  @action.bound _validateRegisterForm(password, passwordConfirmation) {
    let formIsValid = true;

    if (password !== passwordConfirmation) {
      store.storeState.registerMessage = 'Passwords do not match!';
      console.log(store);
      formIsValid = false;
    }

    return formIsValid;
  }

  @action.bound _registerUser(username, email, password, passwordConfirmation) {
    if (!this._validateRegisterForm(password, passwordConfirmation)) {
      return;
    }

    registerUser({username, email, password, passwordConfirmation})
    .then((result) => {
      if (typeof result.errors !== 'undefined') {
        store.storeState.registerMessage = errorHandler(result.errors);
        return;
      }
      store.storeState.registerMessage = 'User created succesfully. Please log in.';
      localSave('apiToken', result.data.attributes['auth-token']);
      localSave('email', email);
      browserHistory.push('/');
    })
    .catch((error) => {
      const errorMessage = `Error: ${error}`;
      store.storeState.registerMessage = errorMessage;
    });
  }

  render() {
    return (
      <div>
        <Logo />
        <RegisterForm onSubmit={this._registerUser} />
        <div id="message" className={styles.message}>{store.storeState.registerMessage}</div>
      </div>
    );
  }
}

export default Register;
