import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import foogl from './reducers';

const initialState = {
  loggedUser: {},
  timeEntries: [],
  projects: []
};

const store = createStore(foogl, initialState);

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
