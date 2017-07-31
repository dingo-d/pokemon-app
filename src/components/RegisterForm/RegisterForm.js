import React, {Component} from 'react';
import {Link} from 'react-router';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './RegisterForm.css';

@observer
class RegisterForm extends Component {
  constructor(args) {
    super(args);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordRepeat: ''
    };
  }

  @action.bound _handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
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

  @action.bound _handlePasswordRepeatChange(e) {
    this.setState({
      passwordRepeat: e.target.value
    });
  }

  @action.bound _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.passwordRepeat
    );
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this._handleSubmit}>
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
