import React, {Component} from 'react';
import {Link} from 'react-router';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './LoginForm.css';

@observer
class LoginForm extends Component {
  constructor(args) {
    super(args);
    this.state = {
      email: '',
      password: ''
    };
  }

  @action.bound _handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  @action.bound _handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  @action.bound _handleSubmit(e) {
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
