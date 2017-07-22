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
    let errorElement = document.getElementById('error_message');

    if (this.state.password !== this.state.passwordRepeat) {
      this.state.errors.passwordMismatch = 'Passwords do not match!';
      errorElement.innerHTML = this.state.errors.passwordMismatch;
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


    });
  }

  render() {
    return(
      <div>
        <RegisterForm onSubmit={this._registerUser} />
        <div id="error_message" className={styles.error}></div>
      </div>
    );
  }
}

export default Register;