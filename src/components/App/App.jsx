import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';

import AuthPage from '../AuthPage';
import Layout from '../Layout';
import { theme } from '../utils';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AuthPage />
        <Layout />
      </MuiThemeProvider>
    );
  }
}

export default App;
