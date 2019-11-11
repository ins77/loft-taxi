import { takeLatest, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import * as constants from './constants';
import * as api from '../../../../core/utils/api';

function* requestSignIn({ payload }) {
  try {
    const result = yield call(api.requestSignIn, payload);

    if (!result.success) throw new Error(result.error);

    yield put(actions.signInSuccess(result.token));
  } catch ({ message, error }) {
    yield put(actions.signInFailure(error || message))
  }
}

export function* signInSaga() {
  yield takeLatest(constants.REQUEST, requestSignIn);
}
