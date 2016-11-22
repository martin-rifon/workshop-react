import { browserHistory } from 'react-router';

// Constants
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

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

export default {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
};
