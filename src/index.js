import React from 'react';
import ReactDOM from 'react-dom';
import { compose, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.scss';
import App from './components/App/App';
import { signInMiddleware, signUpMiddleware, sendCardMiddleware } from './redux/middlewares';
import reducers from './redux/reducers';
import { signInSuccess } from './redux/actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(signInMiddleware),
    applyMiddleware(signUpMiddleware),
    applyMiddleware(sendCardMiddleware),
  ),
);
const token = localStorage.getItem('token');

if (token) {
  store.dispatch(signInSuccess(token));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
