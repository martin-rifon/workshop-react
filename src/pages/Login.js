import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmail from 'is-email';
import { signUp } from '../store/actions';
import './Login.scss';

class Login extends Component {
  constructor (props) {
    super(props);

    this.signUp = ::this.signUp;
  }

  signUp (evt) {
    evt.preventDefault();

    const emailValue = this.signUpInput.value;

    if (isEmail(emailValue)) {
      this.props.signUp(emailValue);
    }
  }

  render () {
    return (
      <section className='login'>
        <div className='login__hero'>
          <h2>Welcome</h2>
        </div>

        <form className='login__form' onSubmit={this.signUp}>
          <input type='text' ref={(input) => { this.signUpInput = input; }} />
          <button>Sign in</button>
        </form>
      </section>
    );
  }
};

Login.propTypes = {
  signUp: React.PropTypes.func.isRequired
};

const mapActionCreators = { signUp };

export default connect(null, mapActionCreators)(Login);
