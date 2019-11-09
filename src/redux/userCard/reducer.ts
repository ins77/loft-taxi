import { handleActions } from 'redux-actions';

import * as actions from './actions';

export default handleActions({
  [actions.sendCardRequest.toString()](state, { payload }: any) {
    return {
      isLoading: true,
      error: null,
    };
  },
  [actions.sendCardSuccess.toString()](state, { payload }: any) {
    return {
      isLoading: false,
      error: null,
    };
  },
  [actions.sendCardFailure.toString()](state, { payload }: any) {
    return {
      isLoading: false,
      error: payload,
    };
  },
}, { isLoading: false, error: null });
