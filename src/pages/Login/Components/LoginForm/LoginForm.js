import React, { Component } from 'react';
import { Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { attemptLogin } from '../../Actions/index';

import './LoginForm.scss';

class LoginForm extends Component {

  doLogin() {
    this.props.attemptLogin({
      email: ReactDOM.findDOMNode(this.refs.emailInput).value
    });

    if (this.props.loggedUser) {
      Router.transitionTo('dashboard');
    }
  }

  render() {
    const doLogin = this.doLogin.bind(this);

    return (
      <div className="login-form">
        <Col md={8} mdOffset={2}>
          <Col md={10} mdOffset={1} className="user-email-input-col">
            <form>
              <FormGroup>
                <FormControl
                  type="email"
                  placeholder="Please enter your email"
                  ref="emailInput" />
              </FormGroup>
            </form>
          </Col>
          <Col md={1} />

          <Col md={2} mdOffset={5}>
            <Button
              bsStyle="primary"
              className="login-button"
              onClick={doLogin}>
              Login
            </Button>
          </Col>
          <Col md={2} />
        </Col>
        <Col md={2} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { loggedUser: state.loggedUser }
}

const mapDispatchToProps = {
  attemptLogin
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
