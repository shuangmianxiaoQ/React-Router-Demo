import React from 'react';
import { connect } from 'react-redux';
import { setLoggedUser } from '../action';

const AppHomePage = ({ logoutApp, history }) => {
  const logout = () => {
    setTimeout(() => {
      logoutApp(false);
      history.push('/');
    }, 500);
  };

  return (
    <div>
      应用首页
      <br />
      <br />
      <button onClick={logout}>登出</button>
    </div>
  );
};

const mapStateToDispatch = dispatch => ({
  logoutApp: logged => dispatch(setLoggedUser(logged))
});

export default connect(
  null,
  mapStateToDispatch
)(AppHomePage);
