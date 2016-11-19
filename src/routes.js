import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import Layout from './layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const routes = (
  <Route path='/' component={Layout}>
    <IndexRedirect to='/login' />
    <Route path='/login' component={Login} />
    <Route path='/dashboard' component={Dashboard} />
  </Route>
);

export default routes;
