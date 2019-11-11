import { takeLatest, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import * as constants from './constants';
import * as api from '../../../core/utils/api';

function* createUserCard({ payload }) {
  try {
    const result = yield call(api.createUserCard, payload);

    if (!result.success) throw new Error(result.error);

    yield put(actions.createCardSuccess(payload));
  } catch ({ message, error }) {
    yield put(actions.createCardFailure(error || message))
  }
}

export function* userCardSaga() {
  yield takeLatest(constants.REQUEST, createUserCard);
}
