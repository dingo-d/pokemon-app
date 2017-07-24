import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  constructor(args) {
    super(args);
  }

  _onClick() {
    alert('BOK');
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