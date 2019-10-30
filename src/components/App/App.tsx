import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';

import { theme } from '../utils';
import { AuthProvider } from '../AuthContext';
import Main from '../Main';

const App: React.FC = () => (
  <AuthProvider>
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
  </AuthProvider>
);

export default App;
