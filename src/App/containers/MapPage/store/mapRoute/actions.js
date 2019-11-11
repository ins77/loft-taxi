import { createAction } from 'redux-actions';

import * as constants from './constants';

export const fetchRouteRequest = createAction(constants.REQUEST);
export const fetchRouteSuccess = createAction(constants.SUCCESS);
export const fetchRouteFailure = createAction(constants.FAILURE);
