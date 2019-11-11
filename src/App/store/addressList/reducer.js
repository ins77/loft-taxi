import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = { isLoading: false, error: null, addresses: [] };

export default handleActions({
  [actions.fetchAddressListRequest](state) {
    return {
      ...state,
      addresses: [],
      isLoading: true,
      error: null,
    };
  },
  [actions.fetchAddressListSuccess](state, { payload }) {
    return {
      ...state,
      addresses: payload,
      isLoading: false,
      error: null,
    };
  },
  [actions.fetchAddressListFailure](state, { payload }) {
    return {
      ...state,
      addresses: [],
      isLoading: false,
      error: payload,
    };
  },
}, initialState);
