import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.signIn.isAuthenticated,
});

const PrivateRoute: React.FC<any> = (props) => {
  const { component: Component, isAuthenticated, ...restProps } = props;

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
