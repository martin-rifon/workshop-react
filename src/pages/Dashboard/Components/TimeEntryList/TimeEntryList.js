import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import TimeEntry from "./../TimeEntry/TimeEntry.js";
import "./TimeEntryList.scss";

class TimeEntryList extends Component {
  renderTimeEntry(timeEntry) {
    return (
      <tr key={timeEntry.id}>
          <td className="time-entry-row">
              <TimeEntry entry={timeEntry} />
          </td>
      </tr>
    );
  }

  render () {
    const { timeEntries, loading } = this.props;
    const renderedTimeEntries = timeEntries.map(this.renderTimeEntry);

    return (
      <div className="time-entry-list">
        <BlockUi tag="div" blocking={ loading }>
          <Col
            md={1}
            mdOffset={1}
            className="time-entry-list-header">
            My tracks
          </Col>

          <Col
            md={10}
            mdOffset={1}
            className="no-padding">
            <Table responsive striped hover className="full-width">
              <tbody>{renderedTimeEntries}</tbody>
            </Table>
          </Col>
        </BlockUi>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    timeEntries: state.timeEntries,
    loading: state.loading.timeEntryList
  }
}

export default connect(mapStateToProps)(TimeEntryList);
