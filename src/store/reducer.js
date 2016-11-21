const ACTION_HANDLERS = {};

// Reducer
export const initialState = {
  user: null,
  tracks: []
};

export const reducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
