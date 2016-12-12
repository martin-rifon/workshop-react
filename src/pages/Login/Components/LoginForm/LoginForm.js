import React, { Component } from 'react';
import { Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import { attemptLogin } from '../../../../store/actions';

import './LoginForm.scss';

class LoginForm extends Component {

  doLogin() {
    this.props.attemptLogin({
      email: ReactDOM.findDOMNode(this.refs.emailInput).value
    });
  }

  render() {
    const doLogin = this.doLogin.bind(this);
    const { loading } = this.props

    return (
      <div className="login-form">
        <BlockUi tag="div" blocking={ loading }>
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
        </BlockUi>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    loggedUser: state.loggedUser,
    loading: state.loading.loginForm
  }
}

const mapDispatchToProps = {
  attemptLogin
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
