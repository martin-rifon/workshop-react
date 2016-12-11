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
  projects: [
    { id: 0, name: 'Default project', owner: 'Default User' }
  ]
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
