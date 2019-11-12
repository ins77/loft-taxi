import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import './index.scss';
import App from './App/App';
import { signInCheck } from './App/containers/AuthPage/store';
import muiTheme from './core/utils/muiTheme';
import store from './core/store';
import { fetchCardRequest } from './App/containers/ProfilePage/store';

const token = localStorage.getItem('token');

store.dispatch(signInCheck());

if (token) {
  store.dispatch(fetchCardRequest(token));
}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
