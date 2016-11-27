import React, { Component } from 'react';

import ProjectList from './Components/ProjectList/ProjectList';
import './Projects.scss';

class Projects extends Component {
  render () {
      return (
          <div className="projects">
              <h1 className="projects-header">Projects</h1>

              <ProjectList />
          </div>
      );
  }
};

export default Projects;
