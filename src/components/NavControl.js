// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'grommet/components/Button';
import MenuIcon from 'grommet/components/icons/base/Menu';

import { navActivate } from '../actions/nav';

class NavControl extends React.Component {

  _onClickMenu = () => {
    console.log
    const { nav: { active } } = this.props;
    this.props.dispatch(navActivate(!active));
  }

  render() {
    return (
      <Button onClick={this._onClickMenu} icon={<MenuIcon />}>
      </Button>
    )
  }
}

NavControl.defaultProps = {
  name: undefined,
  nav: {
    active: true, // start with nav active
    enabled: true, // start with nav disabled
    responsive: 'multiple'
  }
};

NavControl.propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string,
  nav: PropTypes.object
};

const select = state => ({
  nav: state.nav
});

export default connect(select)(NavControl);
