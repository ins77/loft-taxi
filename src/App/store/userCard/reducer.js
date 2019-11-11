import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = { isLoading: false, error: null };

export default handleActions({
  [actions.sendCardRequest](state, { payload }) {
    return {
      isLoading: true,
      error: null,
    };
  },
  [actions.sendCardSuccess](state, { payload }) {
    return {
      isLoading: false,
      error: null,
    };
  },
  [actions.sendCardFailure](state, { payload }) {
    return {
      isLoading: false,
      error: payload,
    };
  },
}, initialState);
