import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import Select from 'react-select';

import secToMin from 'sec-to-min';
import moment from 'moment';

import Configuration from '../../../../configuration.js';
import { createTimeEntry, findOrCreateProjectByName } from '../../Actions/index';

import 'react-select/dist/react-select.css';
import "./TimeEntryForm.scss";

class TimeEntryForm extends Component {
  constructor(props) {
      super(props);

      this.timeoutObject = null;
      this.state = {
        running: false,
        seconds: 0,
        projectId: 0,
        start: null
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

    const end = moment();

    this.setState({
      running: false
    });

    this.props.createTimeEntry({
      start: this.state.start.format(Configuration.dateFormat),
      end: end.format(Configuration.dateFormat),
      projectId: this.state.projectId,
      taskName: this.taskNameInput.value
      // taskName: ReactDOM.findDOMNode(this.taskName).value
    });
  }

  updateSelectedProject(project) {
    this.setState({
      projectId: project.value
    });
  }

  render () {
    const { projects } = this.props;
    const { running, seconds, projectId } = this.state;
    const toggleTimer = this.toggleTimer.bind(this);
    const updateSelectedProject = this.updateSelectedProject.bind(this);
    const secondsInMinFormat = secToMin(seconds);

    return (
      <div className="time-entry-form">
        <form>
          <Col md={10} mdOffset={1} className="no-padding">
            <Col md={8} className="no-padding">
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Task name"
                  ref={ (control) => { this.taskNameInput = control; } }
                  // ref={ (control) => { this.taskName = control; } }
                  className="task-name-input" />
              </FormGroup>
            </Col>

            <Col md={2} className="no-padding no-left-border">
              <FormGroup>
                <Select
                    name="form-field-name"
                    value={projectId}
                    placeholder="Project name"
                    options={projects}
                    onChange={updateSelectedProject}
                    className="task-time-input no-left-border" />
              </FormGroup>
            </Col>

            <Col md={1} className="no-padding no-left-border">
              <FormGroup>
                <FormControl
                  type="text"
                  value={secondsInMinFormat}
                  className="task-time-input no-left-border" />
              </FormGroup>
            </Col>

            <Col md={1} className="no-padding form-group">
              <Button
                bsStyle="primary"
                className="task-start-button no-left-border"
                onClick={toggleTimer}>
                { running ? 'Stop' : 'Start' }
              </Button>
            </Col>
          </Col>
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects.map((project) => {
      return { label: project.name, value: project.id }
    })
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     createTimeEntry: (timeEntry) => {
//       timeEntry.start = timeEntry.start.format(Configuration.dateFormat);
//       timeEntry.end = timeEntry.end.format(Configuration.dateFormat);
//       dispatch(createTimeEntry(timeEntry));
//     }
//   }
// }
const mapDispatchToProps = {
  createTimeEntry
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntryForm);
