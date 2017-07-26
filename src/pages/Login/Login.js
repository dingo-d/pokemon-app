import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import LoginForm from '../../components/LoginForm/LoginForm';

import {loginUser} from '../../services/api';
import {localRead} from '../../services/storage';
import {errorHandler} from '../../services/errorHandler';
import styles from './Login.css';

class Login extends Component {
  constructor(args) {
    super(args);
    this.state = {
      email: '',
      password: '',
      message: ''
    };

    this._loginUser = this._loginUser.bind(this);
    this._validateLoginForm = this._validateLoginForm.bind(this);
  }

  _validateLoginForm(email, password) {
    let formIsValid = true;
    this.state.message = '';

    if (email === '') {
      this.setState({
        message: 'Empty email address!'
      });
      formIsValid = false;
    }

    if (password === '') {
      this.setState({
        message: 'Empty password!'
      });
      formIsValid = false;
    }

    return formIsValid;
  }

  _loginUser(email, password) {
    const authToken = localRead('apiToken');

    if (!this._validateLoginForm(email, password)) {
      return;
    }

    loginUser({email, password, authToken})
    .then((result) => {
      if (typeof result.errors !== 'undefined') {
        this.setState({
          message: errorHandler(result.errors)
        });
        return;
      }
      this.setState({
        message: 'Logged in'
      });
      browserHistory.push('/home');
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
        <LoginForm
          onSubmit={this._loginUser} />
        <div id="message" className={styles.message}>{this.state.message}</div>
      </div>
    );
  }
}

export default Login;
