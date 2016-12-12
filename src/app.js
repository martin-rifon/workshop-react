import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import foogl from './reducers';
import { loadState, saveState } from './store/localStorage';

const initialState = {
  loggedUser: null,
  timeEntries: [],
  projects: [],
  loading: {
    loginForm: false,
    timeEntryList: false,
    timeEntryForm: false,
    projectList: false
  },
  errorMessage: null
};

const store = createStore(foogl,
                          loadState() || initialState,
                          applyMiddleware(thunk));

window.onbeforeunload = () => {
  saveState(store.getState());
};

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} children={routes} />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
