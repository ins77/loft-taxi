import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = { isLoading: false , token: null, error: null, isAuthenticated: false };

export default handleActions({
  [actions.signInCheck]() {
    const token = localStorage.getItem('token');

    return {
      token,
      isAuthenticated: !!token,
      isLoading: false,
      error: null,
    };
  },
  [actions.signInRequest](state) {
    return {
      ...state,
      isLoading: true,
      token: null,
      error: null,
      isAuthenticated: false,
    };
  },
  [actions.signInSuccess](state, { payload }) {
    localStorage.setItem('token', payload);

    return {
      ...state,
      isLoading: false,
      token: payload,
      error: null,
      isAuthenticated: true,
    };
  },
  [actions.signInFailure](state, { payload }) {
    return {
      ...state,
      isLoading: false,
      token: null,
      error: payload,
      isAuthenticated: false,
    };
  },
  [actions.logout](state) {
    localStorage.removeItem('token');

    return {
      ...state,
      isLoading: false,
      token: null,
      error: null,
      isAuthenticated: false,
    };
  }
}, initialState);
