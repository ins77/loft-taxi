import { createAction } from 'redux-actions';

import * as constants from './constants';

export const fetchAddressListRequest = createAction(constants.REQUEST);
export const fetchAddressListSuccess = createAction(constants.SUCCESS);
export const fetchAddressListFailure = createAction(constants.FAILURE);
