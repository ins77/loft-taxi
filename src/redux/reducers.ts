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
      ...payload,
    };
  },
}, { email: null, password: null });

const signUpForm = handleActions({
  [actions.createSignUpData.toString()](state, { payload }: any) {
    return {
      ...state,
      ...payload,
    };
  },
}, { email: null, name: null, surname: null, password: null });

const userCardForm = handleActions({
  [actions.createUserCardData.toString()](state, { payload }: any) {
    return {
      ...state,
      ...payload,
    };
  },
}, { cardNumber: null, cardName: null, cvc: null, expiryDate: null });

const userCard = handleActions({
  [actions.sendCardRequest.toString()](state, { payload }: any) {
    return {
      isLoading: true,
      error: null,
    };
  },
  [actions.sendCardSuccess.toString()](state, { payload }: any) {
    return {
      isLoading: false,
      error: null,
    };
  },
  [actions.sendCardFailure.toString()](state, { payload }: any) {
    return {
      isLoading: false,
      error: payload,
    };
  },
}, { isLoading: false, error: null });

export default combineReducers({
  signIn,
  signUp,
  userCard,
  signInForm,
  signUpForm,
  userCardForm,
});
