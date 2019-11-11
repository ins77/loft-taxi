import axios from 'axios';

import { signUpRequest, signUpSuccess, signUpFailure } from './actions';

export const signUpMiddleware = store => next => action => {
  if (action.type === signUpRequest.toString()) {
    const { payload } = action;

    axios.post('https://loft-taxi.glitch.me/register', payload)
      .then(({ data }) => {
        if (!data.success) {
          throw new Error(data.error);
        }

        store.dispatch(signUpSuccess(data.token));
      })
      .catch(({ message, error }) => {
        store.dispatch(signUpFailure(error || message));
      })
  }

  return next(action);
};
