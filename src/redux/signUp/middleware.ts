import axios from 'axios';

import * as actions from './actions';

export const signUpMiddleware = (store: any) => (next: any) => (action: any): any => {
  if (action.type === actions.signUpRequest.toString()) {
    const { signUpForm } = store.getState();

    axios.post('https://loft-taxi.glitch.me/register', signUpForm)
      .then(({ data }) => {
        if (!data.success) {
          throw new Error(data.error);
        }

        store.dispatch(actions.signUpSuccess(data.token));
      })
      .catch(({ message, error }) => {
        store.dispatch(actions.signUpFailure(error || message));
      })
  }

  return next(action);
};
