import React, { Component } from 'react';

import LoginForm from './Components/LoginForm/LoginForm.js';
import './Login.scss';

class Login extends Component {
  render () {
      return (
          <div className="login">
              <h1 className="login-header">Welcome!</h1>
              <LoginForm />
          </div>
      );
  }
};

export default Login;
