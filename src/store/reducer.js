import actions from './actions';

// Action handlers
const ACTION_HANDLERS = {
  [actions.SIGN_IN_SUCCESS]: (state, action) => {
    return { ...state, user: action.data.user };
  },
  [actions.GET_TIME_ENTRIES_SUCCESS]: (state, action) => {
    return { ...state, tracks: action.data.time_entries };
  }
};

// Reducer
export const initialState = {
  user: null,
  tracks: []
};

export const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
