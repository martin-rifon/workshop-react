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

  'SET_LOGGED_USER': (state, action) => {
    const user = action.user;

    return {
      ...state,
      loggedUser: user
    };
  },

  'ADD_PROJECT': (state, action) => {
    const project = action.project;

    return {
      ...state,
      projects: state.projects
                     .concat(project)
    };
  },

  'ADD_TIME_ENTRY': (state, action) => {
    const timeEntry = action.timeEntry;

    return {
      ...state,
      timeEntries: state.timeEntries
                        .concat(timeEntry)
    };
  },

  'LOADING': (state, action) => {
    const component = action.component
    let newLoading = {}
    newLoading[component.name] = true

    return {
      ...state,
      loading: Object.assign({}, state.loading, newLoading)
    }
  },

  'FINISHED_LOADING': (state, action) => {
    const component = action.component
    let newLoading = {}
    newLoading[component.name] = false

    return {
      ...state,
      loading: Object.assign({}, state.loading, newLoading)
    }
  },

  'DISPLAY_ERROR': (state, action) => {
    return {
      ...state,
      errorMessage: action.message
    }
  },

  'SET_TIME_ENTRIES': (state, action) => {
    return {
      ...state,
      timeEntries: action.timeEntries
    };
  },

  'SET_PROJECTS': (state, action) => {
    return {
      ...state,
      projects: action.projects
    };
  }
}

const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

export default reducer;
