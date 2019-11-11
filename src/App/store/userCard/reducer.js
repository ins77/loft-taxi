import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = { isLoading: false, error: null };

export default handleActions({
  [actions.createCardRequest](state) {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  },
  [actions.createCardSuccess](state, { payload }) {
    return {
      ...state,
      card: payload,
      isLoading: false,
      error: null,
    };
  },
  [actions.createCardFailure](state, { payload }) {
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  },
}, initialState);
