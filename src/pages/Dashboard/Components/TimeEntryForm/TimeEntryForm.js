import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Col, Button, FormGroup, FormControl } from 'react-bootstrap';
import Select from 'react-select';
import secToMin from 'sec-to-min';
import moment from 'moment';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import { createTimeEntry } from '~/src/store/actions';

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

  toggleTimer() {
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
      start: this.state.start.format(),
      end: end.format(),
      projectId: this.state.projectId,
      taskName: ReactDOM.findDOMNode(this.refs.taskNameInput).value
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
    const { loading } = this.props

    return (
      <div className="time-entry-form">
        <BlockUi tag="div" blocking={ loading }>
          <form>
            <Col md={10} mdOffset={1} className="no-padding">
              <Col md={8} className="no-padding">
                <FormGroup>
                  <FormControl
                    type="text"
                    placeholder="Task name"
                    ref="taskNameInput"
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
        </BlockUi>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects.map((project) => {
      return { label: project.name, value: project.id }
    }),
    loading: state.loading.projectList
  }
}

const mapDispatchToProps = {
  createTimeEntry
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntryForm);
