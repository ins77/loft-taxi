import { handleActions } from 'redux-actions';

import * as actions from './actions';

export default handleActions({
  [actions.createUserCardData.toString()](state, { payload }: any) {
    return {
      ...state,
      ...payload,
    };
  },
}, { cardNumber: null, cardName: null, cvc: null, expiryDate: null });
