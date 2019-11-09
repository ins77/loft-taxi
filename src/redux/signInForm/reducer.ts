import { handleActions } from 'redux-actions';

import * as actions from './actions';

export default handleActions({
  [actions.createSignInData.toString()](state, { payload }: any) {
    return {
      ...state,
      ...payload,
    };
  },
}, { email: null, password: null });
