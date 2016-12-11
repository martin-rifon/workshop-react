import { browserHistory } from 'react-router'

export const createTimeEntry = (timeEntry) => {
  return {
    type: 'CREATE_TIME_ENTRY',
    timeEntry
  }
}

export const doLogin = (credentials) => {
  return {
    type: 'DO_LOGIN',
    credentials
  }
}

export const attemptLogin = (credentials) => {
  return function(dispatch, getState) {
    dispatch(doLogin(credentials));
    const state = getState()

    if (state.loggedUser) {
      browserHistory.push('/dashboard')
    }
  }
}

export const createProject = (project) => {
  return {
    type: 'CREATE_PROJECT',
    project
  }
}
