import React, {Component} from 'react';
import RegisterForm from '../components/RegisterForm';

import {registerUser} from '../services/api';
import styles from '../css/LoginElements.css';

class Register extends Component {
  constructor(args) {
    super(args);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordRepeat: '',
      errors: {}
    };

    this._registerUser = this._registerUser.bind(this);
    this._validateRegisterForm = this._validateRegisterForm.bind(this);
  }

  _validateRegisterForm() {
    var formIsValid = true;
    this.state.errors = {};
    let messageElement = document.getElementById('message');
    messageElement.innerHTML = '';
    messageElement.classList.remove('error');

    if (this.state.password !== this.state.passwordRepeat) {
      this.state.errors.passwordMismatch = 'Passwords do not match!';
      messageElement.innerHTML = this.state.errors.passwordMismatch;
      messageElement.className += ' error';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  }

  _registerUser(username, email, password, passwordRepeat) {
    this.setState({
      username: username,
      email: email,
      password: password,
      passwordRepeat: passwordRepeat
    }, () => {
      if (!this._validateRegisterForm()) {
        return;
      }

      let attributes = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordRepeat
      };

      registerUser(attributes);
    });
  }

  render() {
    return(
      <div>
        <RegisterForm onSubmit={this._registerUser} />
        <div id="message" className={styles.message}></div>
      </div>
    );
  }
}

export default Register;