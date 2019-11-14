import { createAction } from 'redux-actions';

import * as constants from './constants';

export const fetchRoutesRequest = createAction(constants.FETCH_ROUTES_REQUEST);
export const fetchRoutesSuccess = createAction(constants.FETCH_ROUTES_SUCCESS);
export const fetchRoutesFailure = createAction(constants.FETCH_ROUTES_FAILURE);

export const fetchAddressesRequest = createAction(constants.FETCH_ADDRESSES_REQUEST);
export const fetchAddressesSuccess = createAction(constants.FETCH_ADDRESSES_SUCCESS);
export const fetchAddressesFailure = createAction(constants.FETCH_ADDRESSES_FAILURE);
