import React, { Component } from 'react';
import './TimeTracker.scss';

class TimeTracker extends Component {
  render () {
    return (
      <div className='time-tracker'>
        <input type='text' />
        <div>00:01</div>
        <button>Start</button>
      </div>
    );
  }
};

export default TimeTracker;
