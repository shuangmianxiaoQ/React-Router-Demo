import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const UserNav = ({ match }) => (
  <nav className="context-nav">
    <NavLink to={`${match.path}`} exact activeClassName="active">
      预览
    </NavLink>
    <NavLink to={`${match.path}/add`} activeClassName="active">
      添加
    </NavLink>
  </nav>
);

export default withRouter(UserNav);
