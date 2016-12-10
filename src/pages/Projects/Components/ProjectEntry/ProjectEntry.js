import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class ProjectEntry extends Component {

  render () {

    const {entry} = this.props

    return (
      <tr className="project-entry">
        <td>
          <Col md={2} className="inherit-padding">
            {entry.id}
          </Col>
        </td>

        <td>
          <Col md={5} className="inherit-padding">
            {entry.name}
          </Col>
        </td>

        <td>
          <Col md={5} className="inherit-padding">
            {entry.owner}
          </Col>
        </td>
      </tr>
    );
  }
};

export default ProjectEntry;
