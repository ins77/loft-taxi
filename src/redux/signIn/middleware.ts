import axios from 'axios';

import * as actions from './actions';

export const signInMiddleware = (store: any) => (next: any) => (action: any): any => {
  if (action.type === actions.signInRequest.toString()) {
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

        store.dispatch(actions.signInSuccess(token));
      })
      .catch(({ message, error }) => {
        store.dispatch(actions.signInFailure(error || message));
      })
  }

  return next(action);
};
