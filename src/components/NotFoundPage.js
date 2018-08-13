import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { navEnable } from '../actions/nav';

const NotFoundPage = (props) => {
  return (
    <div>
      404 - <Link to="/">Go home</Link>
    </div>
  );
}

export default NotFoundPage;
