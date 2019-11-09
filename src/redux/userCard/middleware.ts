import axios from 'axios';

import * as actions from './actions';

export const sendCardMiddleware = (store: any) => (next: any) => (action: any): any => {
  if (action.type === actions.sendCardRequest.toString()) {
    const { signIn: { token }, userCardForm } = store.getState();

    axios.post('https://loft-taxi.glitch.me/card', { ...userCardForm, token })
      .then(({ data }) => {
        if (!data.success) {
          throw new Error(data.error);
        }

        store.dispatch(actions.sendCardSuccess());
      })
      .catch(({ message, error }) => {
        store.dispatch(actions.sendCardFailure(error || message));
      })
  }

  return next(action);
};
