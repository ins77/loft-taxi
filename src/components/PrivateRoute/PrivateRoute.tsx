import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../AuthContext';
 
const PrivateRoute: React.SFC<any> = (props) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { component: Component, ...restProps } = props;

  return (
    <Route {...restProps} 
           render={routeProps => (
             isAuthenticated
               ? <Component {...routeProps} />
               : <Redirect to='/auth' />
           )} />
  );
}
 
export default PrivateRoute;