import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render () {
    return (
      <section className='login'>
        <div className='login__hero'>
          <h2>Welcome</h2>
        </div>

        <form className='login__form'>
          <input type='text' />
          <button>Sign in</button>
        </form>
      </section>
    );
  }
};

export default Login;
