import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoggedUser } from '../action';

const LoginPage = ({ loginApp, history }) => {
  const login = () => {
    setTimeout(() => {
      loginApp(true);
      history.push('/app');
    }, 500);
  };

  return (
    <div>
      <h1>登录页</h1>
      <p>
        对于该示例程序，你将无法在登录之前访问 <Link to="/app">/app</Link>
        ，单击登录按钮可通过`redux`来修改登录状态来模拟登录
      </p>
      <button onClick={login}>登录</button>
    </div>
  );
};

const mapStateToDispatch = dispatch => ({
  loginApp: logged => dispatch(setLoggedUser(logged))
});

export default connect(
  null,
  mapStateToDispatch
)(LoginPage);
