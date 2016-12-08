import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import Layout from './layout';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Projects from './pages/Projects/Projects';

const routes = (
  <Route path='/' component={Layout}>
    <IndexRedirect to='/login' />
    <Route path='/login' component={Login} />
    <Route path='/dashboard' name="dashboard" component={Dashboard} />
    <Route path='/projects' component={Projects} />
  </Route>
);

export default routes;
