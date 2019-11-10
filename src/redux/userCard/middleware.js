import axios from 'axios';

import { sendCardRequest, sendCardSuccess, sendCardFailure } from './actions';

export const sendCardMiddleware = store => next => action => {
  if (action.type === sendCardRequest.toString()) {
    const { payload } = action; // token, userCardForm

    axios.post('https://loft-taxi.glitch.me/card', payload)
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
