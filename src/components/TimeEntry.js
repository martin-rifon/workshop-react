import React, { Component } from 'react';
import Octicon from 'react-octicon';
import './TimeEntry.scss';

class TimeEntry extends Component {
  render () {
    const {description} = this.props;

    return (
      <li className='time-entry'>
        <Octicon name='triangle-right' />
        <p contentEditable>{description}</p>
        <div className='time-entry__start'>00:01 PM</div>
        <div className='time-entry__end'>00:02 PM</div>
        <Octicon name='x' />
      </li>
    );
  }
};

TimeEntry.propTypes = {
  description: React.PropTypes.string
};

export default TimeEntry;
