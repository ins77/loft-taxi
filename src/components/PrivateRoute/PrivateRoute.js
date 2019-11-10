import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSignIn } from '../../redux/signIn';

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
 
export default connect(mapStateToProps)(PrivateRoute);
