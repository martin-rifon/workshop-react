import Immutable from 'immutable';

const dateFormat = 'dddd MMMM DD YYYY, HH:mm:ss';

const ACTION_HANDLERS = {
  'CREATE_TIME_ENTRY': (state, action) => {
    const timeEntry = action.timeEntry;
    let project =
      state.projects
              .find((project) => {
                return project.name == timeEntry.projectName
              });

    if (!project) {
      project = {
        name: timeEntry.projectName,
        creator_id: 1
      };
      state.projects.push(project);
    }

    state.timeEntries.push({
      project,
      label: timeEntry.taskName,
      start: timeEntry.start.format(dateFormat),
      end: timeEntry.end.format(dateFormat)
    });

    return state;
  }
}

const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  // Deep clone of current state.
  let newState = Immutable.fromJS(state).toJS();

  return handler ? handler(newState, action) : newState;
}

export default reducer;
