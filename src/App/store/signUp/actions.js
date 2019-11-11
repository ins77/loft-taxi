import { createAction } from 'redux-actions';

import * as constants from './constants';

export const signUpRequest = createAction(constants.REQUEST);
export const signUpSuccess = createAction(constants.SUCCESS);
export const signUpFailure = createAction(constants.FAILURE);