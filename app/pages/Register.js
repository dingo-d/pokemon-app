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
      message: '',
      errors: {}
    };

    this._registerUser = this._registerUser.bind(this);
    this._validateRegisterForm = this._validateRegisterForm.bind(this);
  }

  _validateRegisterForm() {
    var formIsValid = true;
    this.state.errors = {};
    this.state.message = '';

    if (this.state.password !== this.state.passwordRepeat) {
      let message = 'Passwords do not match!';
      this.state.errors.passwordMismatch = message;
      this.state.message = message;
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
      passwordRepeat: passwordRepeat,
      message: ''
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

      registerUser(attributes).then((result) => {
        this.setState({
          message: 'User created succesfully. Please log in.'
        });
        console.log('success:', result)})
      .catch((error) => {
        this.setState({
          message: 'Something went wrong...'
        });
        console.log('error:', error)});
    });
  }

  render() {
    return(
      <div>
        <RegisterForm onSubmit={this._registerUser} />
        <div id="message" className={styles.message}>{this.state.message}</div>
      </div>
    );
  }
}

export default Register;