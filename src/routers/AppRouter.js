import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import { navResponsive } from '../actions/nav';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';

import NavSidebar from '../components/NavSidebar';
import NavControl from '../components/NavControl';


export const history = createHistory();

class AppRouter extends React.Component {

  _onResponsive = (responsive) => {
    this.props.dispatch(navResponsive(responsive));
  }

  render() {

    const { active: navActive, enabled: navEnabled, responsive } = this.props.nav;
    const includeNav = (navActive && navEnabled);
    let nav;
    if (includeNav) {
      nav = <NavSidebar />;
    }
    const priority = (includeNav && responsive === 'single' ? 'left' : 'right');

    return (
      <App centered={true}>
        <Router history={history}>
          <Box justify='around' primary={true} alignContent='center'>
            <Header colorIndex='neutral-1'>
              <Box direction='row' >
               { navEnabled && <NavControl /> }
                <Heading align='center' tag='h2'>Sample heading </Heading>
              </Box>
            </Header>
            <Split
              priority={priority}
              flex='right'
              onResponsive={this._onResponsive}
            >
              {nav}
              <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </Split>
          </Box>
        </Router>
      </App>
    );
  }
}


const select = state => ({
  nav: state.nav
});

export default connect(select)(AppRouter);
