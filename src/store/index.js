import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {initialState, reducer} from './reducer';

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
