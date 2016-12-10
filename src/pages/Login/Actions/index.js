export const doLogin = (credentials) => {
  return {
    type: 'DO_LOGIN',
    credentials
  }
}

export const attemptLogin = (credentials) => {
  return function(dispatch, getState) {
    const state = getState();
    dispatch(doLogin(credentials));
  }
}
