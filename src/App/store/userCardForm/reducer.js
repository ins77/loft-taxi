import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = { cardNumber: null, cardName: null, cvc: null, expiryDate: null };

export default handleActions({
  [actions.createUserCardData](state, { payload }) {
    return {
      ...state,
      ...payload,
    };
  },
}, initialState);
