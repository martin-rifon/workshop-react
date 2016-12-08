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

  'ATTEMPT_LOGIN': (state, action) => {
    const credentials = action.credentials;

    return {
      ...state,
      loggedUser: credentials.email
    };
  }
}

const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

export default reducer;
