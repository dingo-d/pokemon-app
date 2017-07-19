import React, {Component} from 'react';
import RegisterForm from '../components/RegisterForm';

import {createUser} from '../services/api';

class Login extends Component {
  constructor(args) {
    super(args);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordRepeat: '',
      errors: {}
    };
  }

  componentWillMount() {

  }

  validateRegisterForm() {
    var formIsValid = true;
    this.state.errors = {};

    if (this.state.password !== this.state.passwordRepeat) {
      this.state.errors.passwordMismatch = 'Passwords do not match!';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  }

  registerUser(e) {
    e.preventDefault();
    if (!this.validateRegisterForm()) {
      return;
    }



  }

  render() {
    return(
      <div>
        <RegisterForm
          registerUsername={this.state.username}
          registerEmail={this.state.email}
          registerPassword={this.state.password}
          registerPasswordRepeat={this.state.passwordRepeat}
          onSubmit={this.registerUser} />
      </div>
    );
  }
}

export default Login;