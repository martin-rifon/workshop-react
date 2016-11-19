import React from 'react';

const Layout = ({children}) => (
  <main>
    <div>Header</div>

    {children}
  </main>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default Layout;
