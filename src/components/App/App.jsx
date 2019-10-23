import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';

import AuthPage from '../AuthPage';
import Layout from '../Layout';
import { theme } from '../utils';

class App extends Component {
  state = {
    showAuthPage: true,
    showContentPage: false,
  }

  onAuthSubmit = event => {
    event.preventDefault();

    this.setState({ showContentPage: true, showAuthPage: false });
  }

  onSignOut = () => {
    this.setState({ showContentPage: false, showAuthPage: true });
  }

  render() {
    const { showAuthPage, showContentPage } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        {showAuthPage && <AuthPage onAuthSubmit={this.onAuthSubmit} />}
        {showContentPage && <Layout onSignOut={this.onSignOut} />}
      </MuiThemeProvider>
    );
  }
}

export default App;
