import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import foogl from './reducers';

const store = createStore(foogl);

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} children={routes} />
      </Provider>
    )
  }
}

const render = () => ReactDOM.render(<App />, document.getElementById('app'));

render();
store.subscribe(render);
