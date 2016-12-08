import React, { Component } from 'react';

import './bootstrap.min.css';
import './utils.scss';
import './Layout.scss';

import { Col, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import Icon from 'react-fa';
import { Link } from 'react-router';

class Layout extends Component {
  render() {
    const {loggedUser} = this.props;
    const greeting = loggedUser ? `Hi! ${loggedUser.email}` : 'Hi! guest';

    let logo = (
      <Link to={ loggedUser ? '/dashboard' : '/login' }>
        <Icon
          spin
          name='clock-o'
        />
        <span className="logo-text">Foogl</span>
      </Link>
    );

    let projectsLink = '';
    if (loggedUser) {
      projectsLink = (
        <Nav>
          <NavItem>
            <Link to="/projects">
              Projects
            </Link>
          </NavItem>
        </Nav>
      );
    }

    return (
      <main>
        <Navbar inverse collapseOnSelect className="layout-header">
          <Navbar.Header>
            <Navbar.Brand>
              { logo }
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            {projectsLink}

            <Nav pullRight>
              <NavItem>{greeting}</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {this.props.children}
      </main>
    )
  }
};

Layout.propTypes = {
  children: React.PropTypes.node.isRequired
};

function mapStateToProps(state) {
  return { loggedUser: state.loggedUser }
}

export default connect(mapStateToProps)(Layout);
