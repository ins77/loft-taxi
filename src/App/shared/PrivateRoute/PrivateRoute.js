import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getSignIn } from '../../containers/withAuthLayout/store';

const mapStateToProps = state => ({
  signIn: getSignIn(state),
});

const PrivateRoute = (props) => {
  const { component: Component, signIn: { isAuthenticated }, ...restProps } = props;

  return (
    <Route {...restProps} 
           render={routeProps => (
             isAuthenticated
               ? <Component {...routeProps} />
               : <Redirect to='/signin' />
           )} />
  );
}

PrivateRoute.propTypes = {
  signIn: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
  component: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(PrivateRoute);
