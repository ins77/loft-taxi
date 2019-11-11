import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = { isLoading: false, error: null, card: {} };

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
  [actions.fetchCardRequest](state) {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  },
  [actions.fetchCardSuccess](state, { payload }) {
    return {
      ...state,
      card: payload,
      isLoading: false,
      error: null,
    };
  },
  [actions.fetchCardFailure](state, { payload }) {
    return {
      ...state,
      isLoading: false,
      error: payload,
    };
  },
}, initialState);
