import Immutable from 'immutable';

import Project from '../models/Project.js';

const initialState = {
  loggedUser: {},
  timeEntries: [],
  projects: []
}

const dateFormat = 'dddd MMMM DD YYYY, HH:mm:ss';



export default (state = initialState, action) => {
  // Deep clone of current state.
  let newState = Immutable.fromJS(state).toJS();

  switch (action.type) {
    case 'CREATE_TIME_ENTRY':
      const timeEntry = action.timeEntry;
      let project =
        newState.projects
                .find((project) => {
                  return project.name == timeEntry.projectName
                });

      if (!project) {
        project = new Project(timeEntry.projectName)
        newState.projects.push(project);
      }

      newState.timeEntries.push({
        project,
        label: timeEntry.taskName,
        start: timeEntry.start.format(dateFormat),
        end: timeEntry.end.format(dateFormat)
      });

      break;
  }

  return newState;
}
