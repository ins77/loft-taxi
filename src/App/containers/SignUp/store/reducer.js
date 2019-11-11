import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = { isLoading: false, token: null, error: null };

export default handleActions({
  [actions.signUpRequest](state) {
    return {
      ...state,
      isLoading: true,
      error: null,
      token: null,
    };
  },
  [actions.signUpSuccess](state, { payload }) {
    return {
      ...state,
      isLoading: false,
      error: null,
      token: payload,
    };
  },
  [actions.signUpFailure](state, { payload }) {
    return {
      ...state,
      isLoading: false,
      error: payload,
      token: null,
    };
  },
}, initialState);
