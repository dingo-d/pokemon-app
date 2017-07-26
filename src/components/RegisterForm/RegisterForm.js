import React, {Component} from 'react';
import {Link} from 'react-router';

import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './RegisterForm.css';

class RegisterForm extends Component {
  constructor(args) {
    super(args);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordRepeat: ''
    };

    this._handleUsernameChange = this._handleUsernameChange.bind(this);
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this._handlePasswordRepeatChange = this._handlePasswordRepeatChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleUsernameChange(e) {
    let value = e.target.value;
    this.setState({
      username: value
    });
  };

  _handleEmailChange(e) {
    let value = e.target.value;
    this.setState({
      email: value
    });
  }

  _handlePasswordChange(e) {
    let value = e.target.value;
    this.setState({
      password: value
    });
  }

  _handlePasswordRepeatChange(e) {
    let value = e.target.value;
    this.setState({
      passwordRepeat: value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.passwordRepeat
    )
  }

  render() {
    return(
      <form className={styles.form} onSubmit={this._handleSubmit}>
        <h3 className={styles.title}>Pokemon User Register</h3>
        <div className={styles.wrapper}>
          <Input
          name="username"
          label="Username"
          required="true"
          handleChange={this._handleUsernameChange}
          type="text" />
        </div>
        <div className={styles.wrapper}>
          <Input
          name="email"
          label="Email address"
          required="true"
          handleChange={this._handleEmailChange}
          type="email" />
        </div>
        <div className={styles.wrapper}>
          <Input
          name="password"
          label="Password"
          required="true"
          handleChange={this._handlePasswordChange}
          type="password" />
        </div>
        <div className={styles.wrapper}>
          <Input
          name="passwordRepeat"
          label="Repeat password"
          required="true"
          handleChange={this._handlePasswordRepeatChange}
          type="password" />
        </div>
        <div className={styles.wrapper}>
          <Button
          name="Register" />
          <Link to="/" className={styles.register}>Back</Link>
        </div>
      </form>
    );
  }
}

export default RegisterForm;