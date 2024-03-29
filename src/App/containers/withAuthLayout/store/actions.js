import { createAction } from 'redux-actions';

import * as constants from './constants';

export const checkSignIn = createAction(constants.SIGN_IN_CHECK);

export const logout = createAction(constants.SIGN_IN_LOGOUT);

export const signInRequest = createAction(constants.SIGN_IN_REQUEST);
export const signInSuccess = createAction(constants.SIGN_IN_SUCCESS);
export const signInFailure = createAction(constants.SIGN_IN_FAILURE);

export const signUpRequest = createAction(constants.SIGN_UP_REQUEST);
export const signUpSuccess = createAction(constants.SIGN_UP_SUCCESS);
export const signUpFailure = createAction(constants.SIGN_UP_FAILURE);

export const initSignUp = createAction(constants.SIGN_UP_INIT)
