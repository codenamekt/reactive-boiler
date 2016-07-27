import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { AppBar, Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';

const App = (props) => {
  return (
    <Layout>
      <Panel>
        <AppBar fixed flat>
          <IndexLink to="/">Home</IndexLink>
          {' | '}
          <Link to="/fuel-savings">Demo App</Link>
          {' | '}
          <Link to="/About">About</Link>
        </AppBar>
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
          {props.children}
        </div>
      </Panel>
    </Layout>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
