import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoggedUser } from './action';

class AuthorizedRoute extends Component {
  componentWillMount() {
    setTimeout(this.props.accessApp, 500);
  }

  render() {
    const { component: Component, pending, logged, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => {
          if (pending) return <div>加载中...</div>;
          return logged ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth/login" />
          );
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  pending: state.pending,
  logged: state.logged
});

const mapStateToDispatch = dispatch => ({
  accessApp: () => dispatch(getLoggedUser())
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(AuthorizedRoute);
