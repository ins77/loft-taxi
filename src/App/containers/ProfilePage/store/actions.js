import { createAction } from 'redux-actions';

import * as constants from './constants';

export const initCreateCard = createAction(constants.INIT);

export const fetchCardRequest = createAction(constants.FETCH_REQUEST);
export const fetchCardSuccess = createAction(constants.FETCH_SUCCESS);
export const fetchCardFailure = createAction(constants.FETCH_FAILURE);

export const createCardRequest = createAction(constants.CREATE_REQUEST);
export const createCardSuccess = createAction(constants.CREATE_SUCCESS);
export const createCardFailure = createAction(constants.CREATE_FAILURE);
