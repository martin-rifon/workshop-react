import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Table, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { createProject } from '../../../../store/actions';
import ProjectEntry from "./../ProjectEntry/ProjectEntry.js";

class ProjectEntryList extends Component {
  addProject() {
    this.props.createProject({
      name: ReactDOM.findDOMNode(this.refs.projectNameInput).value
    });
  }

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
        <Col md={4} mdOffset={3} className="no-padding">
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Project name"
              ref="projectNameInput"
              className="project-name-input" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <Button
            bsStyle="primary"
            className="add-project-button"
            onClick={::this.addProject}>
            Add Project
          </Button>
        </Col>
        <Col md={3} />

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

const mapStateToProps = function(state) {
  return { projects: state.projects }
}

const mapDispatchToProps = {
  createProject
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEntryList);
