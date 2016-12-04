const dateFormat = 'dddd MMMM DD YYYY, HH:mm:ss';

const ACTION_HANDLERS = {
  'CREATE_TIME_ENTRY': (state, action) => {
    const timeEntry = action.timeEntry;

     return Object.assign({}, state,
       {
         timeEntries: state.timeEntries
                           .concat({
                             projectId: timeEntry.projectId,
                             label: timeEntry.taskName,
                             start: timeEntry.start.format(dateFormat),
                             end: timeEntry.end.format(dateFormat)
                           })
       });
  }
}

const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

export default reducer;
