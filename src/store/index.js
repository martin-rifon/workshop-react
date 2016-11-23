import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { initialState, reducer } from './reducer';
import { loadState, saveState } from './stateStorage';

const persistedState = loadState();
const middleware = [thunk];

const store = createStore(
  reducer,
  Object.assign({}, initialState, persistedState),
  applyMiddleware(...middleware)
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
