import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { AppBar, FontIcon, Layout, Panel} from 'react-toolbox';

const App = (props) => {
  return (
    <Layout>
      <Panel>
        <AppBar>
          <IndexLink to="/"><FontIcon value="home" /></IndexLink>
          {' | '}
          <Link to="/fuel-savings"><FontIcon value="directions_car" /></Link>
          {' | '}
          <Link to="/About"><FontIcon value="info" /></Link>
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
