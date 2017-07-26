import React, {Component} from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

import {registerUser} from '../../services/api';
import {localSave} from '../../services/storage';
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
    this._errorHandler = this._errorHandler.bind(this);
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

  _errorHandler(errorObject) {
    let errorMessage = '';
    for (const error in errorObject) {
      if (errorObject.hasOwnProperty(error)) {
        const pointer = errorObject[error].source.pointer.split('/').pop();
        const detail = errorObject[error].detail;
        errorMessage += `${pointer} ${detail}; `;
      }
    }
    return errorMessage;
  }

  _registerUser(username, email, password, passwordConfirmation) {
    if (!this._validateRegisterForm(password, passwordConfirmation)) {
      return;
    }

    registerUser({username, email, password, passwordConfirmation})
      .then((result) => {
        if (typeof result.errors !== 'undefined') {
          this.setState({
            message: this._errorHandler(result.errors)
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
        <RegisterForm onSubmit={this._registerUser} />
        <div id="message" className={styles.message}>{this.state.message}</div>
      </div>
    );
  }
}

export default Register;
