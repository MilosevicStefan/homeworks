import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { navEnable } from '../actions/nav';

class LoginPage extends React.Component {

  componentDidMount() {
    console.log('LogIn');
    this.props.dispatch(navEnable(false));
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.props.dispatch(navEnable(true));
  }

  _onLogIn = () => {
    this.props.dispatch(startLogin());
  }

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Boilerplate</h1>
          <p>Tag line for app.</p>
          <button className="button" onClick={this._onLogIn}>Login with Google</button>
        </div>
      </div>
    );
  }
}

export default connect()(LoginPage);
