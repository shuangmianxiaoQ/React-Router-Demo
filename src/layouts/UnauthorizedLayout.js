import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// 登录页
import LoginPage from '../pages/LoginPage';

const UnauthorizedLayout = () => (
  <div className="unauthorized-layout">
    {/*
      这里可能是所有未授权页面的总体布局
      比如登录页，忘记密码，邮件验证等
    */}
    <Switch>
      <Route path="/auth/login" component={LoginPage} />
      <Redirect to="/auth/login" />
    </Switch>
  </div>
);

export default UnauthorizedLayout;
