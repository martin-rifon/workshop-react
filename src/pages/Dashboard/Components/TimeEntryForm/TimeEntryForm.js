import React, { Component } from 'react';

import { Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import "./TimeEntryForm.scss";

class TimeEntryForm extends Component {

  constructor() {
      super();
  }

  render () {
    return (
        <div className="time-entry-form">
          <form>
            <Col md={10} mdOffset={1} className="no-padding">
                <Col md={8} className="no-padding">
                  <FormGroup>
                    <FormControl type="text" placeholder="Task name" className="task-name-input" />
                  </FormGroup>
                </Col>

                <Col md={2} className="no-padding no-left-border">
                  <FormGroup>
                    <FormControl type="text" placeholder="Project name" className="task-time-input no-left-border" />
                  </FormGroup>
                </Col>

                <Col md={1} className="no-padding no-left-border">
                  <FormGroup>
                    <FormControl type="text" placeholder="00:01" className="task-time-input no-left-border" />
                  </FormGroup>
                </Col>

                <Col md={1} className="no-padding form-group">
                    <Button bsStyle="primary" className="task-start-button no-left-border">Start</Button>
                </Col>
            </Col>
          </form>
        </div>
    );
  }
};

export default TimeEntryForm;
