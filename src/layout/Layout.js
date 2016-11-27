import React from 'react';

import './bootstrap.min.css';
import './utils.scss';
import './Layout.scss';

import { Col, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Icon from 'react-fa';

const Layout = ({children}) => (
  <main>
    <Navbar inverse collapseOnSelect className="layout-header">
        <Navbar.Header>
          <Navbar.Brand>
            <Icon
              spin
              name='clock-o'
            />
            <span className="logo-text">Foogl</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavItem>Projects</NavItem>
          </Nav>

          <Nav pullRight>
            <NavItem>Hi! user</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    {children}
  </main>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default Layout;
