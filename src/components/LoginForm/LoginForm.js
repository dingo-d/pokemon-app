import React, {Component} from 'react';
import {Link} from 'react-router';

import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './LoginForm.css';

class LoginForm extends Component {
  constructor(args) {
    super(args);
    this.state = {
      email: '',
      password: ''
    };

    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  _handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(
      this.state.email,
      this.state.password
    );
  }

  render() {
    const email = this.state.email;
    const password = this.state.password;

    return (
      <form className={styles.form} onSubmit={this._handleSubmit}>
        <h3 className={styles.title}>Pokemon Login</h3>
        <div className={styles.wrapper}>
          <Input
          name="email"
          label="Email address"
          value={email}
          type="email"
          required="true"
          handleChange={this._handleEmailChange} />
        </div>
        <div className={styles.wrapper}>
          <Input
          name="password"
          label="Password"
          value={password}
          type="password"
          required="true"
          handleChange={this._handlePasswordChange} />
        </div>
        <div className={styles.wrapper}>
          <Button
          name="Log in" />
          <Link to="/register" className={styles.register}>Register</Link>
        </div>
      </form>
    );
  }
}

export default LoginForm;
