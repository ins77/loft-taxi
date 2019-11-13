import { takeLatest, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import * as constants from './constants';
import * as api from '../../../../core/utils/api';

function* createProfile({ payload }) {
  try {
    const result = yield call(api.createProfile, payload);

    if (result.error) {
      throw new Error(result.error);
    }

    const { token, ...card } = payload;

    yield put(actions.createCardSuccess(card));
  } catch ({ message, error }) {
    yield put(actions.createCardFailure(error || message))
  }
}

function* fetchProfile({ payload }) {
  try {
    const result = yield call(api.fetchProfile, payload);

    if (result.error) {
      throw new Error(result.error);
    }

    const { id, ...card } = result;

    yield put(actions.fetchCardSuccess(card));
  } catch ({ message, error }) {
    yield put(actions.fetchCardFailure(error || message))
  }
}

export function* fetchProfileSaga() {
  yield takeLatest(constants.FETCH_REQUEST, fetchProfile);
}

export function* createProfileSaga() {
  yield takeLatest(constants.CREATE_REQUEST, createProfile);
}
