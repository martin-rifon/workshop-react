import { browserHistory } from 'react-router'

const ACTION_HANDLERS = {
  'CREATE_TIME_ENTRY': (state, action) => {
    const timeEntry = action.timeEntry;

    return {
      ...state,
      timeEntries: state.timeEntries
                        .concat({
                          projectId: timeEntry.projectId,
                          label: timeEntry.taskName,
                          start: timeEntry.start,
                          end: timeEntry.end
                        })
    };
  },

  'DO_LOGIN': (state, action) => {
    const credentials = action.credentials;

    // Check credentials here.

    return {
      ...state,
      loggedUser: credentials
    };
  },

  'CREATE_PROJECT': (state, action) => {
    const project = action.project;
    const lastProject = state.projects[state.projects.length - 1]

    return {
      ...state,
      projects: state.projects
                     .concat({
                       id: lastProject.id + 1,
                       name: project.name,
                       owner: state.loggedUser.email
                     })
    };
  }
}

const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

export default reducer;
