export const attemptLogin = (credentials) => {
  return {
    type: 'ATTEMPT_LOGIN',
    credentials
  }
}
