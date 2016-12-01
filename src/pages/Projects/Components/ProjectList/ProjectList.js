import React, { Component } from 'react';

import { Col, Table } from 'react-bootstrap';
import ProjectEntry from "./../ProjectEntry/ProjectEntry.js";

class ProjectEntryList extends Component {

  constructor(props) {
      super(props);

      this.state = {
          projects: [
              {
                id: 1,
                name: 'Project #1',
                creator: {
                  'id': 2,
                  'name': 'John'
                }
              },
              {
                id: 46,
                name: 'Project #23',
                creator: {
                  'id': 5,
                  'name': 'Jane'
                }
              }
          ]
      };
  }

  renderProjectEntry(projectEntry) {
    return (
      <ProjectEntry
        entry={projectEntry}
        key={projectEntry.id} />
    );
  }

  render () {
    const projectEntries = this.state.projects.map(this.renderProjectEntry);

    return (
        <div className="project-entry-list">
            <Col
                md={10}
                mdOffset={1}
                className="no-padding">
                <Table responsive striped hover className="full-width">
                    <thead>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Owner</th>
                    </thead>
                    <tbody>{projectEntries}</tbody>
                </Table>
            </Col>
        </div>
    );
  }
};

export default ProjectEntryList;
