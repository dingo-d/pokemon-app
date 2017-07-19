import React, {Component} from 'react';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  constructor(args) {
    super(args);
    this.state = {
      email: '',
      password: ''
    };
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
          loginEmail={this.state.email}
          loginPassword={this.state.password}
          onSubmit={this._onClick} />
      </div>
    );
  }
}

export default Login;