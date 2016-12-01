import React from 'react';

import ProjectList from './Components/ProjectList/ProjectList';
import './Projects.scss';

export default () => (
  <div className="projects">
    <h1 className="projects-header">Projects</h1>
    <ProjectList />
  </div>
);
