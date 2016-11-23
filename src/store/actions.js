import { browserHistory } from 'react-router';

// Constants
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const GET_TIME_ENTRIES_SUCCESS = 'GET_TIME_ENTRIES_SUCCESS';
export const GET_TIME_ENTRIES_FAILURE = 'GET_TIME_ENTRIES_FAILURE';

// Action creators
export const signUp = (email) => {
  return (dispatch, getState) => {
    fetch(API_URL + '/users/signup', {
        method: 'POST',
        body: JSON.stringify({email})
      }
    )
    .then(data => data.json())
    .then(
      data => dispatch({ type: SIGN_IN_SUCCESS, data }),
      err => dispatch({ type: SIGN_IN_FAILURE, err })
    )
    .then(() => { browserHistory.push('/dashboard'); });
  }
}

export const getTimeEntries = () => {
  return (dispatch, getState) => {
    fetch(API_URL + '/time_entries?user_id=' + getState().user.id)
    .then(data => data.json())
    .then(
      data => dispatch({ type: GET_TIME_ENTRIES_SUCCESS, data }),
      err => dispatch({ type: GET_TIME_ENTRIES_FAILURE, err })
    );
  }
}

export default {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  GET_TIME_ENTRIES_SUCCESS,
  GET_TIME_ENTRIES_FAILURE
};
