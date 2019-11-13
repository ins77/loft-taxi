import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import PrivateRoute from '../PrivateRoute';
import MapPage from '../../containers/MapPage';
import ProfilePage from '../../containers/ProfilePage';
import SignIn from '../../containers/SignIn';
import SignUp from '../../containers/SignUp';

const App = () => (
  <Switch>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <PrivateRoute path="/map" component={MapPage} />
    <PrivateRoute path="/profile" component={ProfilePage} />
    <Redirect to="/map" />
  </Switch>
);

export default App;
