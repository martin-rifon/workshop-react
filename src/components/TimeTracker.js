import React, { Component } from 'react';
import secToMin from 'sec-to-min';
import './TimeTracker.scss';

class TimeTracker extends Component {
  constructor (props) {
    super(props);

    this.state = { running: false, timer: 0 };

    this.toggleTimer = ::this.toggleTimer;
  }

  toggleTimer () {
    if (this.state.running) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer () {
    this.setState({ running: true });

    this.timerInterval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  stopTimer () {
    this.setState({ running: false, timer: 0 });

    clearInterval(this.timerInterval);
  }

  render () {
    const { running, timer } = this.state;
    const buttonText = running ? 'Stop' : 'Start';

    return (
      <div className='time-tracker'>
        <input type='text' />
        <div>{secToMin(timer)}</div>
        <button onClick={this.toggleTimer}>{buttonText}</button>
      </div>
    );
  }
};

export default TimeTracker;
