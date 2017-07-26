import React, {Component} from 'react';
import {Link} from 'react-router';

import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './LoginForm.css';

class LoginForm extends Component {
  constructor(args) {
    super(args);
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this.state = {
      loginEmail: '',
      loginPassword: ''
    };
  }

  _handleEmailChange(e) {
    this.setState({
      loginEmail: e.target.value
    });
  }

  _handlePasswordChange(e) {
    this.setState({
      loginPassword: e.target.value
    });
  }

  render() {
    const email = this.state.loginEmail;
    const password = this.state.loginPassword;
    const click = this.state.onSubmit;

    return(
      <div className={styles.form}>
        <h3 className={styles.title}>Pokemon Login</h3>
        <div className={styles.wrapper}>
          <Input
          name="loginEmail"
          label="Email address"
          value={email}
          type="email"
          onChange={this._handleEmailChange} />
        </div>
        <div className={styles.wrapper}>
          <Input
          name="loginPassword"
          label="Password"
          value={password}
          type="password"
          onChange={this._handlePasswordChange} />
        </div>
        <div className={styles.wrapper}>
          <Button
          name="Log in"
          onClick={click} />
          <Link to="/register" className={styles.register}>Register</Link>
        </div>
      </div>
    );
  }
}

export default LoginForm;