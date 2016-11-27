import React, { Component } from 'react';

import { Col, Table } from 'react-bootstrap';
import TimeEntry from "./../TimeEntry/TimeEntry.js";
import "./TimeEntryList.scss";

class TimeEntryList extends Component {

  constructor() {
      super();

      this.state = {
          time_entries: [
              {
                id: 1,
                label: "Track #1",
                start: "00:01",
                end: "00:02",
                project: { name: 'Project #1' }
              },
              {
                id: 2,
                label: "Track #2",
                start: "00:01",
                end: "00:02",
                project: { name: 'Project #1' }
              },
              {
                id: 3,
                label: "Track #3",
                start: "00:01",
                end: "00:02",
                project: { name: 'Project #23' }
              },
              {
                id: 4,
                label: "Track #4",
                start: "00:01",
                end: "00:02",
                project: { name: 'Project #23' }
              },
              {
                id: 5,
                label: "Track #5",
                start: "00:01",
                end: "00:02",
                project: { name: 'Project #23' }
              }
          ]
      };
  }

  render () {
    return (
        <div className="time-entry-list">
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
                    <tbody>
                        {
                            this.state.time_entries.map(
                                (timeEntry) =>
                                <tr key={timeEntry.id}>
                                    <td className="time-entry-row">
                                        <TimeEntry entry={timeEntry} />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Col>
        </div>
    );
  }
};

export default TimeEntryList;
