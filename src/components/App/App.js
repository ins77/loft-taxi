import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { theme } from '../../utils';
import PrivateRoute from '../PrivateRoute';
import MapPage from '../../containers/MapPage';
import ProfilePage from '../../containers/ProfilePage';
import SignIn from '../../containers/SignIn';
import SignUp from '../../containers/SignUp';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/map" component={MapPage} />
        <PrivateRoute path="/profile" component={ProfilePage} />
        <Redirect to="/map" />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App;