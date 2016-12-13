import { browserHistory } from 'react-router'
import FooglApi from '~/src/api/Foogl'

// Loading.
export const loading = (component) => {
  return {
    type: 'LOADING',
    component
  }
}
export const finishedLoading = (component) => {
  return {
    type: 'FINISHED_LOADING',
    component
  }
}

// Error.
export const displayError = (message) => {
  return {
    type: 'DISPLAY_ERROR',
    message
  }
}

// Time Entries.
export const createTimeEntry = (timeEntry) => {
  return function(dispatch, getState) {
    dispatch(loading({ name: 'timeEntryList' }));
    timeEntry.userId = getState().loggedUser.id

    return FooglApi.createTimeEntry(timeEntry)
                   .then((response) => {
                      dispatch(finishedLoading({ name: 'timeEntryList' }))
                      dispatch(addTimeEntryToStore(response.time_entry))
                    })
                   .catch((error) => {
                      dispatch(finishedLoading({ name: 'timeEntryList' }))
                      dispatch(displayError(error))
                    });
  }
}

export const addTimeEntryToStore = (timeEntry) => {
  return {
    type: 'ADD_TIME_ENTRY',
    timeEntry
  }
}

export const setTimeEntries = (timeEntries) => {
  return {
    type: 'SET_TIME_ENTRIES',
    timeEntries
  }
}

export const loadTimeEntries = (userId) => {
  return function(dispatch, getState) {
    dispatch(loading({ name: 'timeEntryList' }))

    return FooglApi.timeEntries(userId)
                   .then((response) => {
                      dispatch(finishedLoading({ name: 'timeEntryList' }))
                      dispatch(setTimeEntries(response.time_entries))
                    })
                   .catch((error) => {
                      dispatch(finishedLoading({ name: 'timeEntryList' }))
                      dispatch(displayError(error))
                    });
  }
}

export const loadProjects = (userId) => {
  return function(dispatch, getState) {
    dispatch(loading({ name: 'projectList' }))

    return FooglApi.projects(userId)
                   .then((response) => {
                      dispatch(finishedLoading({ name: 'projectList' }))
                      dispatch(setProjects(response.projects))
                    })
                   .catch((error) => {
                      dispatch(finishedLoading({ name: 'projectList' }))
                      dispatch(displayError(error))
                    });
  }
}

// Login.
export const attemptLogin = (credentials) => {
  return function(dispatch, getState) {
    dispatch(loading({ name: 'loginForm' }));

    return FooglApi.signup(credentials)
                   .then((response) => {
                      dispatch(finishedLoading({ name: 'loginForm' }))
                      dispatch(setLoggedUser(response.user))

                      dispatch(loadTimeEntries(response.user.id))
                      dispatch(loadProjects(response.user.id))

                      browserHistory.push('/dashboard')
                    })
                   .catch((error) => {
                      dispatch(finishedLoading({ name: 'loginForm' }))
                      dispatch(displayError(error))
                    });
  }
}
export const setLoggedUser = (user) => {
  return {
    type: 'SET_LOGGED_USER',
    user
  }
}

// Projects.
export const createProject = (projectData) => {
  return function(dispatch, getState) {
    dispatch(loading({ name: 'projectList' }));

    const project = {
      name: projectData.name,
      userId: getState().loggedUser.id
    }

    return FooglApi.createProject(project)
                   .then((response) => {
                      dispatch(finishedLoading({ name: 'projectList' }))
                      dispatch(addProjectToStore(response.project))
                    })
                   .catch((error) => {
                      dispatch(finishedLoading({ name: 'projectList' }))
                      dispatch(displayError(error))
                    });
  }
}

export const addProjectToStore = (project) => {
  return {
    type: 'ADD_PROJECT',
    project
  }
}

export const setProjects = (projects) => {
  return {
    type: 'SET_PROJECTS',
    projects
  }
}
