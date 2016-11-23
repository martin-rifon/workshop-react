import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeTracker from '../components/TimeTracker';
import TimeEntry from '../components/TimeEntry';
import { getTimeEntries } from '../store/actions';
import './Dashboard.scss';

class Dashboard extends Component {
  componentWillMount () {
    this.props.getTimeEntries();
  }

  renderEmptyMessage () {
    return <li className='dashboard-list-zero-state'>You dont have any tracks.</li>;
  }

  render () {
    const tracks = this.props.tracks.map((track) => (
      <TimeEntry
        key={track.id}
        title={track.title}
        timeStart={track.time_start}
        timeEnd={track.timeEnd} />
    ));

    return (
      <section className='dashboard'>
        <div className='dashboard__hero'>
          <h2>Start tracking!</h2>
          <TimeTracker />
        </div>

        <div className='dashboard__list'>
          <h3>My tracks</h3>
          <ul>
            { tracks.length > 0 ? tracks : this.renderEmptyMessage() }
          </ul>
        </div>
      </section>
    );
  }
};

Dashboard.propTypes = {
  tracks: React.PropTypes.array.isRequired,
  getTimeEntries: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({ tracks: state.tracks });
const mapActionCreators = { getTimeEntries };

export default connect(mapStateToProps, mapActionCreators)(Dashboard);
