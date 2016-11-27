import React, { Component } from 'react';

import { Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import './LoginForm.scss';

class LoginForm extends Component {
  render () {
      return (
          <div className="login-form">
              <Col md={8} mdOffset={2}>
                  <Col md={10} mdOffset={1} className="user-email-input-col">
                    <form>
                      <FormGroup>
                        <FormControl type="email" placeholder="Please enter your email" />
                      </FormGroup>
                    </form>
                  </Col>
                  <Col md={1} />

                  <Col md={2} mdOffset={5}>
                      <Button bsStyle="primary" className="login-button">Login</Button>
                  </Col>
                  <Col md={2} />
              </Col>
              <Col md={2} />
          </div>
      );
  }
};

export default LoginForm;
