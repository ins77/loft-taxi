import { createAction } from 'redux-actions';

import * as constants from './constants';

export const createCardRequest = createAction(constants.REQUEST);
export const createCardSuccess = createAction(constants.SUCCESS);
export const createCardFailure = createAction(constants.FAILURE);
