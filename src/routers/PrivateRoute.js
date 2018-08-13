import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export class PrivateRoute extends React.Component {

  componentDidMount() {
  }

  render() {
    const {
      isAuthenticated,
      component: Component,
      ...rest
    } = this.props; {

      let componentToShow = isAuthenticated ? Component : ( () => <Redirect to="/" />);
      return (
        <Route {...rest} component={componentToShow} />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});


export default connect(mapStateToProps)(PrivateRoute);
