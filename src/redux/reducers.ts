import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import * as actions from './actions';

// TODO: разбить как в лекции? данные не в payload, а payload.signUp или др. для явности
const signIn = handleActions({
  [actions.signInRequest.toString()](state) {
    return {
      ...state,
      isLoading: true,
      token: null,
      error: null,
      isAuthenticated: false,
    };
  },
  [actions.signInSuccess.toString()](state, { payload }: any) {
    return {
      ...state,
      isLoading: false,
      token: payload,
      error: null,
      isAuthenticated: true,
    };
  },
  [actions.signInFailure.toString()](state, { payload }: any) {
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

const signUp = handleActions({
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

const signInForm = handleActions({
  [actions.createSignInData.toString()](state, { payload }: any) {
    return {
      ...state,
      email: payload.email,
      password: payload.password,
    };
  },
}, { email: null, password: null });

const signUpForm = handleActions({
  [actions.createSignUpData.toString()](state, { payload }: any) {
    return {
      ...state,
      email: payload.email,
      name: payload.name,
      surname: payload.surname,
      password: payload.password,
    };
  },
}, { email: null, name: null, surname: null, password: null });

export default combineReducers({
  signIn,
  signUp,
  signInForm,
  signUpForm,
});
