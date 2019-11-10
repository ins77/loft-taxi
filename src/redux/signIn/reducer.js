import { handleActions } from 'redux-actions';

import * as actions from './actions';

export default handleActions({
  [actions.signInRequest.toString()](state) {
    return {
      ...state,
      isLoading: true,
      token: null,
      error: null,
      isAuthenticated: false,
    };
  },
  [actions.signInSuccess.toString()](state, { payload }) {
    return {
      ...state,
      isLoading: false,
      token: payload,
      error: null,
      isAuthenticated: true,
    };
  },
  [actions.signInFailure.toString()](state, { payload }) {
    return {
      ...state,
      isLoading: false,
      token: null,
      error: payload,
      isAuthenticated: false,
    };
  },
  [actions.logout.toString()](state) {
    return {
      ...state,
      isLoading: false,
      token: null,
      error: null,
      isAuthenticated: false,
    };
  }
}, { isLoading: false , token: null, error: null, isAuthenticated: false });
