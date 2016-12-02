import React, { Component } from 'react';

import { Col, Table } from 'react-bootstrap';
import ProjectEntry from "./../ProjectEntry/ProjectEntry.js";
import { connect } from 'react-redux';

class ProjectEntryList extends Component {
  renderProjectEntry(projectEntry) {
    return (
      <ProjectEntry
        entry={projectEntry}
        key={projectEntry.id} />
    );
  }

  render () {
    const projectEntries = this.props.projects.map(this.renderProjectEntry);

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

function mapStateToProps(state) {
  return { projects: state.projects }
}

export default connect(mapStateToProps)(ProjectEntryList);
