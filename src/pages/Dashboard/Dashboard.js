import React, { Component } from 'react';

import TimeEntryFormContainer from './Containers/TimeEntryFormContainer.js';
import TimeEntryList from './Components/TimeEntryList/TimeEntryList.js';
import './Dashboard.scss';

class Dashboard extends Component {
  render () {
    return (
        <div className="dashboard">
            <h1 className="dashboard-header">Start tracking!</h1>
            <TimeEntryFormContainer />
            <TimeEntryList />
        </div>
    );
  }
};

export default Dashboard;
