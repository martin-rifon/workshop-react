import React from 'react';

import LoginForm from './Components/LoginForm/LoginForm.js';
import './Login.scss';

export default () => (
  <div className="login">
    <h1 className="login-header">Welcome!</h1>
    <LoginForm />
  </div>
);
