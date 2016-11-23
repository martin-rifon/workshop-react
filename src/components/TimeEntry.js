import React, { Component } from 'react';
import Octicon from 'react-octicon';
import './TimeEntry.scss';

class TimeEntry extends Component {
  renderDate (dateString) {
    const date = new Date(dateString);
    return date.getHours() + ':' + date.getMinutes();
  }

  render () {
    const {title, timeStart, timeEnd} = this.props;

    return (
      <li className='time-entry'>
        <Octicon name='triangle-right' />
        <p contentEditable>{title}</p>
        <div className='time-entry__start'>
          { timeStart ? this.renderDate(timeStart) : '-:-' }
        </div>
        <div className='time-entry__end'>
          { timeEnd ? this.renderDate(timeEnd) : '-:-' }
        </div>
        <Octicon name='x' />
      </li>
    );
  }
};

TimeEntry.propTypes = {
  title: React.PropTypes.string,
  timeStart: React.PropTypes.string,
  timeEnd: React.PropTypes.string
};

export default TimeEntry;
