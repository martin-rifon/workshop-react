import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Popover, OverlayTrigger, FormGroup,
         ControlLabel, Modal, Button } from 'react-bootstrap'
import Icon from 'react-fa'
import moment from 'moment'
import { DateField, Calendar, TransitionView } from 'react-date-picker'
import 'react-date-picker/index.css'

import { deleteTimeEntry, updateTimeEntry } from '~/src/store/actions';

import './TimeEntry.scss';

class TimeEntry extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  toggleShowModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  deleteTimeEntry() {
    this.props.deleteTimeEntry(this.props.entry.id);
    this.toggleShowModal();
  }

  render () {
    const { showModal } = this.state;
    const toggleShowModal = ::this.toggleShowModal
    const deleteTimeEntry = ::this.deleteTimeEntry
    const onChange = (dateString, attribute) => {
      let timeEntry = this.props.entry
      timeEntry[attribute] = moment(dateString, 'DD-MM-YYYY HH:mm:ss').format()
      this.props.updateTimeEntry(timeEntry)
    }

    const editPopover = (
      <Popover title="Edit Time Entry">
        <form>
          <FormGroup controlId="formControlStart">
            <ControlLabel>Start:</ControlLabel>
            <DateField
              forceValidDate
              defaultValue={moment(this.props.entry.time_start).format("DD-MM-YYYY HH:mm:ss")}
              dateFormat="DD-MM-YYYY HH:mm:ss"
              onChange={(dateString) => { onChange(dateString, 'time_start') }}
            />
          </FormGroup>

          <FormGroup controlId="formControlEnd">
            <ControlLabel>End:</ControlLabel>
            <DateField
              forceValidDate
              defaultValue={moment(this.props.entry.time_end).format("DD-MM-YYYY HH:mm:ss")}
              dateFormat="DD-MM-YYYY HH:mm:ss"
              onChange={(dateString) => { onChange(dateString, 'time_end') }}
            />
          </FormGroup>
        </form>
      </Popover>
    );

    const deleteModal = (
      <div className="static-modal">
        <Modal show={showModal}>
          <Modal.Header>
            <Modal.Title>Delete Time Entry</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Are you sure you want to delete this Time Entry?
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={ toggleShowModal }>Cancel</Button>
            <Button bsStyle="danger" onClick={ deleteTimeEntry }>Delete</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );

    return (
      <div className="time-entry">
        <Col md={5} className="inherit-padding">
          {this.props.entry.title}
        </Col>

        <Col md={2} className="time-entry-start inherit-padding">
          {this.props.project.name}
        </Col>

        <Col md={2} className="time-entry-start inherit-padding">
          {this.props.entry.time_start}
        </Col>

        <Col md={2} className="time-entry-end inherit-padding">
          {this.props.entry.time_end}
        </Col>

        <Col md={1} className="time-entry-options inherit-padding">
          <Col md={6} className="hover-pointer">
            <OverlayTrigger
              trigger="click"
              placement="left"
              overlay={ editPopover }>
              <Icon
                name='cogs'
                size='lg'
                alt='asdf'
              />
            </OverlayTrigger>
          </Col>

          <Col md={6} className="hover-pointer">
            <Icon
              name="trash"
              size="lg"
              onClick={ toggleShowModal }
            />
          </Col>
        </Col>

        { deleteModal }
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects.find((project) => {
      return ownProps.entry.project_id == project.id
    })
  };
}

const mapDispatchToProps = {
  deleteTimeEntry,
  updateTimeEntry
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntry);
