import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AdminRoute = ({ component: Component, loading, user: { isAdmin }, ...rest }) => (
  <Route {...rest} render={props => (!isAdmin && !loading ? <Redirect to="/" /> : <Component {...props} />)} />
);

AdminRoute.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  loading: state.user.loading,
});

export default connect(mapStateToProps)(AdminRoute);
