import React, {Component} from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Logo from '../../components/Logo/Logo';

import {registerUser} from '../../services/api';
import {localSave} from '../../services/storage';
import {errorHandler} from '../../services/errorHandler';

import styles from './Register.css';

class Register extends Component {
  constructor(args) {
    super(args);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordRepeat: '',
      message: ''
    };

    this._registerUser = this._registerUser.bind(this);
    this._validateRegisterForm = this._validateRegisterForm.bind(this);
  }

  _validateRegisterForm(password, passwordConfirmation) {
    let formIsValid = true;
    this.state.message = '';

    if (password !== passwordConfirmation) {
      this.setState({
        message: 'Passwords do not match!'
      });
      formIsValid = false;
    }

    return formIsValid;
  }

  _registerUser(username, email, password, passwordConfirmation) {
    if (!this._validateRegisterForm(password, passwordConfirmation)) {
      return;
    }

    registerUser({username, email, password, passwordConfirmation})
    .then((result) => {
      if (typeof result.errors !== 'undefined') {
        this.setState({
          message: errorHandler(result.errors)
        });
        return;
      }
      this.setState({
        message: 'User created succesfully. Please log in.'
      });
      localSave('apiToken', result.data.attributes['auth-token']);
    })
    .catch((error) => {
      const errorMessage = `Error: ${error}`;
      this.setState({
        message: errorMessage
      });
    });
  }

  render() {
    return (
      <div>
        <Logo />
        <RegisterForm onSubmit={this._registerUser} />
        <div id="message" className={styles.message}>{this.state.message}</div>
      </div>
    );
  }
}

export default Register;
