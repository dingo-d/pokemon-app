import React, {Component} from 'react';
import { Link } from 'react-router';
import Input from './Input';
import Button from './Button';
import styles from '../css/LoginElements.css';

class LoginForm extends Component {
  constructor(args) {
    super(args);
    this.state  = {
      inputValue: ''
    };
  }

  _handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    const email = this.props.loginEmail;
    const password = this.props.loginPassword;
    const click = this.props.onSubmit;

    return(
      <div className={styles.form}>
        <h3 className={styles.title}>Pokemon Login</h3>
        <div className={styles.wrapper}>
          <Input
          name="loginEmail"
          label="Email address"
          value={email}
          type="email"
          onChange={this._handleInputChange} />
        </div>
        <div className={styles.wrapper}>
          <Input
          name="loginPassword"
          label="Password"
          value={password}
          type="password"
          onChange={this._handleInputChange} />
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