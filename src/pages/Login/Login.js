import React, {Component} from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

import styles from './Login.css';

class Login extends Component {
  constructor(args) {
    super(args);
  }

  componentWillMount() {

  }

  render() {
    return(
      <div>
        <LoginForm
          onSubmit={this._onClick} />
      </div>
    );
  }
}

export default Login;
