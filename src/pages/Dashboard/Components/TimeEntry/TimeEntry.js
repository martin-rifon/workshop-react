import React, { Component } from 'react';

import { connect } from 'react-redux';
import {Col} from 'react-bootstrap';
import './TimeEntry.scss';

class TimeEntry extends Component {

  render () {
    return (
        <div className="time-entry">
            <Col md={6} className="inherit-padding">
                {this.props.entry.title}
            </Col>

            <Col md={2} className="time-entry-start inherit-padding">
                {this.props.project.name}
            </Col>

            <Col md={2} className="time-entry-start inherit-padding">
                {this.props.entry.time_start}
            </Col>

            <Col md={2} className="time-entry-end inherit-padding">
                {this.props.entry.time_end}
            </Col>
        </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects.find((project) => {
      return ownProps.entry.project_id == project.id
    })
  };
}

export default connect(mapStateToProps)(TimeEntry);
