import React, {Component} from 'react';
import { Link } from 'react-router';

import Input from './Input';
import Button from './Button';
import styles from '../css/LoginElements.css';

class RegisterForm extends Component {
  render() {
    const username = this.props.registerUsername;
    const email = this.props.registerEmail;
    const password = this.props.registerPassword;
    const click = this.props.onSubmit;

    return(
      <div className={styles.form}>
        <h3 className={styles.title}>Pokemon User Register</h3>
        <div className={styles.wrapper}>
          <Input
          name="registerUsername"
          label="User name"
          value={username}
          type="text" />
        </div>
        <div className={styles.wrapper}>
          <Input
          name="registerEmail"
          label="Email address"
          value={email}
          type="email" />
        </div>
        <div className={styles.wrapper}>
          <Input
          name="registerPassword"
          label="Password"
          value={password}
          type="password" />
        </div>
        <div className={styles.wrapper}>
          <Input
          name="registerPasswordRepeat"
          label="Repeat password"
          value={password}
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