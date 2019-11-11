import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = { isLoading: false, error: null, coords: [] };

export default handleActions({
  [actions.fetchRouteRequest](state) {
    return {
      ...state,
      coords: [],
      isLoading: true,
      error: null,
    };
  },
  [actions.fetchRouteSuccess](state, { payload }) {
    return {
      ...state,
      coords: payload,
      isLoading: false,
      error: null,
    };
  },
  [actions.fetchRouteFailure](state, { payload }) {
    return {
      ...state,
      coords: [],
      isLoading: false,
      error: payload,
    };
  },
}, initialState);
