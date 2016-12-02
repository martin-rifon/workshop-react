import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import secToMin from 'sec-to-min';
import moment from 'moment';
import "./TimeEntryForm.scss";

class TimeEntryForm extends Component {
  constructor(props) {
      super(props);

      this.timeoutObject = null;
      this.state = {
        running: false,
        seconds: 0,
        start: null,
        end: null
      }
  }

  toggleTimer () {
    if (this.state.running) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.setState({
      running: true,
      seconds: 0,
      start: moment()
    });

    this.timeoutObject = setInterval(() => {
      this.setState((previousState) => ({
        seconds: previousState.seconds + 1
      }));
    }, 1000);
  }

  stopTimer() {
    clearTimeout(this.timeoutObject);

    const end = moment(this.state.start).add(this.state.seconds, 's');
    this.setState({
      running: false,
      end
    });

    this.props.createTimeEntry({
      start: this.state.start,
      end: end,
      projectName: ReactDOM.findDOMNode(this.refs.projectName).value,
      taskName: ReactDOM.findDOMNode(this.refs.taskName).value
    });
  }

  render () {
    return (
      <div className="time-entry-form">
        <form>
          <Col md={10} mdOffset={1} className="no-padding">
            <Col md={8} className="no-padding">
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Task name"
                  ref="taskName"
                  className="task-name-input" />
              </FormGroup>
            </Col>

            <Col md={2} className="no-padding no-left-border">
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Project name"
                  ref="projectName"
                  className="task-time-input no-left-border" />
              </FormGroup>
            </Col>

            <Col md={1} className="no-padding no-left-border">
              <FormGroup>
                <FormControl
                  type="text"
                  value={secToMin(this.state.seconds)}
                  className="task-time-input no-left-border" />
              </FormGroup>
            </Col>

            <Col md={1} className="no-padding form-group">
              <Button
                bsStyle="primary"
                className="task-start-button no-left-border"
                onClick={this.toggleTimer.bind(this)}>
                { this.state.running ? 'Stop' : 'Start' }
              </Button>
            </Col>
          </Col>
        </form>
      </div>
    );
  }
};

export default TimeEntryForm;
