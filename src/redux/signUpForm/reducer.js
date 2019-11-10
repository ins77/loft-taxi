import { handleActions } from 'redux-actions';

import * as actions from './actions';

export default handleActions({
  [actions.createSignUpData](state, { payload }) {
    return {
      ...state,
      ...payload,
    };
  },
}, { email: null, name: null, surname: null, password: null });
