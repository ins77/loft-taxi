import { handleActions } from 'redux-actions';

import * as actions from './actions';

export default handleActions({
  [actions.createSignInData](state, { payload }) {
    return {
      ...state,
      ...payload,
    };
  },
}, { email: null, password: null });
