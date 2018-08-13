import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';



const PublicRoute = ({
  isAuthenticated,
  component,
  ...rest }) => {
  let componentToShow = isAuthenticated ? () => <Redirect to="/dashboard" /> : component ;
   return (<Route {...rest} key='' component={componentToShow} />
  )
}



const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
