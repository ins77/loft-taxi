import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Dashboard from './containers/Dashboard';

const App = () => (
  <Switch>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <Redirect to="/dashboard" />
  </Switch>
);

export default App;
