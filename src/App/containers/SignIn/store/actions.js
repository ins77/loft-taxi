import { createAction } from 'redux-actions';

import * as constants from './constants';

export const signInCheck = createAction(constants.CHECK);
export const signInRequest = createAction(constants.REQUEST);
export const signInSuccess = createAction(constants.SUCCESS);
export const signInFailure = createAction(constants.FAILURE);
export const logout = createAction(constants.LOGOUT);
