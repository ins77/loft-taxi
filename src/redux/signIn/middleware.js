import axios from 'axios';

import { signInRequest, signInSuccess, signInFailure } from './actions';

export const signInMiddleware = store => next => action => {
  if (action.type === signInRequest.toString()) {
    const { signInForm } = store.getState();

    axios.post('https://loft-taxi.glitch.me/auth', signInForm)
      .then(({ data }) => {
        if (!data.success) {
          throw new Error(data.error);
        }
        
        const { token } = data;

        if (localStorage.getItem('token') !== token) {
          localStorage.setItem('token', token);
        }

        store.dispatch(signInSuccess(token));
      })
      .catch(({ message, error }) => {
        store.dispatch(signInFailure(error || message));
      })
  }

  return next(action);
};
