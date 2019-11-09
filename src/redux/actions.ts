import { createAction } from 'redux-actions';

export const signInRequest = createAction('SIGN_IN_REQUEST');
export const signInSuccess = createAction('SIGN_IN_SUCCESS');
export const signInFailure = createAction('SIGN_IN_FAILURE');

export const signUpRequest = createAction('SIGN_UP_REQUEST');
export const signUpSuccess = createAction('SIGN_UP_SUCCESS');
export const signUpFailure = createAction('SIGN_UP_FAILURE');

export const logout = createAction('SIGN_OUT');

export const createSignInData = createAction('CREATE_SIGN_IN_DATA');
export const createSignUpData = createAction('CREATE_SIGN_UP_DATA');

export const sendCardRequest = createAction('CARD_SEND_REQUEST');
export const sendCardSuccess = createAction('CARD_SEND_SUCCESS');
export const sendCardFailure = createAction('CARD_SEND_FAILURE');

export const createUserCardData = createAction('CREATE_USER_CARD_DATA');
