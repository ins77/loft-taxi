import axios from 'axios';

import { sendCardRequest, sendCardSuccess, sendCardFailure } from './actions';

export const sendCardMiddleware = (store: any) => (next: any) => (action: any): any => {
  if (action.type === sendCardRequest.toString()) {
    const { signIn: { token }, userCardForm } = store.getState();

    axios.post('https://loft-taxi.glitch.me/card', { ...userCardForm, token })
      .then(({ data }) => {
        if (!data.success) {
          throw new Error(data.error);
        }

        store.dispatch(sendCardSuccess());
      })
      .catch(({ message, error }) => {
        store.dispatch(sendCardFailure(error || message));
      })
  }

  return next(action);
};
