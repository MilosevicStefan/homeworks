import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Avatar from 'react-avatar';

import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Label from 'grommet/components/Label';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import DocumentCloudIcon from 'grommet/components/icons/base/DocumentCloud';
import Anchor from 'grommet/components/Anchor';

import { startLogout } from '../actions/auth';
import { navActivate } from '../actions/nav';

class NavSidebar extends React.Component {
  
  _onLogOut = () => {
    this.props.dispatch(startLogout());
  }

  render() {
    const { nav: { items } } = this.props;
    const links = items.map(page => (
      <Box key={page.label} direction='row'>
        <DocumentCloudIcon size='xsmall' />
        <Anchor path={page.path} label={page.label} />
      </Box>  
    ));

    return (
      <Sidebar colorIndex='neutral-1' fixed={true}>
        <Header>
        <Avatar align='top' facebookId='1262480035' size='50' round={true} />
        <Label size='small' align='start' > {'STEFAN MILOSEVIC'} </Label>
        </Header>
        <Menu fill={true} primary={true}>
          {links}
        </Menu>
        <Button onClick={this._onLogOut}>Logout</Button>  
      </Sidebar>
    );
  }
}

NavSidebar.defaultProps = {
  nav: {
    active: true, // start with nav active
    enabled: true, // start with nav disabled
    responsive: 'multiple'
  }
};

NavSidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string
    }))
  })
};

const mapStateToProps = (state) => ({
  nav: state.nav
});


export default connect(mapStateToProps)(NavSidebar);
