import { connect } from 'react-redux';
import { createTimeEntry } from '../Actions/index';
import TimeEntryForm from '../Components/TimeEntryForm/TimeEntryForm';

const mapStateToProps = (state) => { return {} }

const mapDispatchToProps = (dispatch) => {
  return {
    createTimeEntry: (timeEntry) => {
      dispatch(createTimeEntry(timeEntry))
    }
  }
}

const TimeEntryFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntryForm)

export default TimeEntryFormContainer
