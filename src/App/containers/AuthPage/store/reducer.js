import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import * as actions from './actions';

const signInInitialState = { isLoading: false , token: null, error: null, isAuthenticated: false };
const singUpInitialState = { isLoading: false, token: null, error: null };

const signIn = handleActions({
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
}, signInInitialState);

const signUp = handleActions({
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
}, singUpInitialState);

export default combineReducers({
  signIn,
  signUp,
});