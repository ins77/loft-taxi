import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { theme } from '../../utils';
import { AuthProvider } from '../AuthContext';
import PrivateRoute from '../PrivateRoute';
import MapPage from '../../containers/MapPage';
import ProfilePage from '../../containers/ProfilePage';
import AuthPage from '../../containers/AuthPage';

const App: React.FC = () => (
  <AuthProvider>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={AuthPage} />
          <PrivateRoute path="/map" component={MapPage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          {/* <Route path="/" exact component={}> */}
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </AuthProvider>
);

export default App;
