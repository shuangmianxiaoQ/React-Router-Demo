import React from 'react';
import { NavLink } from 'react-router-dom';

const PrimaryHeader = () => (
  <header className="primary-header">
    <h1>欢迎访问我的主页！</h1>
    <nav>
      <NavLink to="/app" exact activeClassName="active">
        首页
      </NavLink>
      <NavLink to="/app/users" activeClassName="active">
        用户
      </NavLink>
      <NavLink to="/app/products" activeClassName="active">
        商品
      </NavLink>
    </nav>
  </header>
);

export default PrimaryHeader;
