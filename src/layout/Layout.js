import React from 'react';
import Octicon from 'react-octicon';
import './Layout.scss';

const Layout = ({children}) => (
  <main>
    <header>
      <Octicon name='clock' mega spin />
      <h1>Foogl</h1>
    </header>

    {children}
  </main>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default Layout;
