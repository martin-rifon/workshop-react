import React, { Component } from 'react';
import TimeTracker from '../components/TimeTracker';
import TimeEntry from '../components/TimeEntry';
import './Dashboard.scss';

class Dashboard extends Component {
  render () {
    return (
      <section className='dashboard'>
        <div className='dashboard__hero'>
          <h2>Start tracking!</h2>
          <TimeTracker />
        </div>

        <div className='dashboard__list'>
          <h3>My tracks</h3>
          <ul>
            <TimeEntry description='Lorem Ipsum' />
            <TimeEntry description='Lorem Ipsum' />
            <TimeEntry description='Lorem Ipsum' />
          </ul>
        </div>
      </section>
    );
  }
};

export default Dashboard;
