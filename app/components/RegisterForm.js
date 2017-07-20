import React, {Component} from 'react';
import { Link } from 'react-router';

import Input from './Input';
import Button from './Button';
import styles from '../css/LoginElements.css';

class RegisterForm extends Component {
  constructor(args) {
    super(args);
    this._handleUsernameChange = this._handleUsernameChange.bind(this);
    this._handleEmailChange = this._handleEmailChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this.state  = {
      registerUsername: '',
      registerEmail: '',
      registerPassword: '',
      registerPasswordRepeat: ''
    };
  }

  _handleUsernameChange(e) {
    this.setState({
      registerUsername: e.target.value
    });
  }

  _handleEmailChange(e) {
    this.setState({
      registerEmail: e.target.value
    });
  }

  _handlePasswordChange(e) {
    this.setState({
      registerPassword: e.target.value
    });
  }

  render() {
    const click = this.props.onSubmit;

    return(
      <div className={styles.form}>
        <h3 className={styles.title}>Pokemon User Register</h3>
        <div className={styles.wrapper}>
          <Input
          name="registerUsername"
          label="User name"
          value={this.state.registerUsername}
          required="true"
          type="text" />
        </div>
        <div className={styles.wrapper}>
          <Input
          name="registerEmail"
          label="Email address"
          value={this.state.registerEmail}
          required="true"
          type="email" />
        </div>
        <div className={styles.wrapper}>
          <Input
          name="registerPassword"
          label="Password"
          value={this.state.registerPassword}
          required="true"
          type="password" />
        </div>
        <div className={styles.wrapper}>
          <Input
          name="registerPasswordRepeat"
          label="Repeat password"
          value={this.state.registerPasswordRepeat}
          required="true"
          type="password" />
        </div>
        <div className={styles.wrapper}>
          <Button
          name="Register"
          onClick={click} />
          <Link to="/" className={styles.register}>Back</Link>
        </div>
      </div>
    );
  }
}

export default RegisterForm;