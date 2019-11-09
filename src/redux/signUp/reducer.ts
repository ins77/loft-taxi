import { handleActions } from 'redux-actions';

import * as actions from './actions';

export default handleActions({
  [actions.signUpRequest.toString()](state) {
    return {
      ...state,
      isLoading: true,
      error: null,
      token: null,
    };
  },
  [actions.signUpSuccess.toString()](state, { payload }: any) {
    return {
      ...state,
      isLoading: false,
      error: null,
      token: payload,
    };
  },
  [actions.signUpFailure.toString()](state, { payload }: any) {
    return {
      ...state,
      isLoading: false,
      error: payload,
      token: null,
    };
  },
}, { isLoading: false, token: null, error: null });
