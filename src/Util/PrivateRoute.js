import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthenticated, loading, ...rest }) => {
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={props => (!isAuthenticated && !loading ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

PrivateRoute.propTypes = {
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.user.loading,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
