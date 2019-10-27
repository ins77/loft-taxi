import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';

import AuthPage from '../AuthPage';
import Layout from '../Layout';
import { theme } from '../utils';

type State = {
  showAuthPage: boolean;
  showContentPage: boolean;
};

class App extends Component<State> {
  state: State = {
    showAuthPage: true,
    showContentPage: false,
  }

  onAuthSubmit = (event: React.SyntheticEvent) => {
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
