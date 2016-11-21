import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import store from './store';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} children={routes} />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
