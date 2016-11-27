import React, { Component } from 'react';

import {Col} from 'react-bootstrap';

class ProjectEntry extends Component {

  render () {
    return (
      <tr className="project-entry">
        <td>
          <Col md={2} className="inherit-padding">
              {this.props.entry.id}
          </Col>
        </td>

        <td>
          <Col md={5} className="inherit-padding">
              {this.props.entry.name}
          </Col>
        </td>

        <td>
          <Col md={5} className="inherit-padding">
              {this.props.entry.creator.name}
          </Col>
        </td>
      </tr>
    );
  }
};

export default ProjectEntry;
