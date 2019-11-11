import { takeLatest, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import * as constants from './constants';
import * as api from '../../../../core/utils/api';

function* createProfile({ payload }) {
  try {
    yield call(api.createProfile, payload);
    const { token, ...card } = payload;

    yield put(actions.createCardSuccess(card));
  } catch ({ message, error }) {
    yield put(actions.createCardFailure(error || message))
  }
}

function* fetchProfile({ payload }) {
  try {
    const result = yield call(api.fetchProfile, payload);
    const { id, ...card } = result;

    yield put(actions.createCardSuccess(card));
  } catch ({ message, error }) {
    yield put(actions.createCardFailure(error || message))
  }
}

export function* fetchProfileSaga() {
  yield takeLatest(constants.FETCH_REQUEST, fetchProfile);
}

export function* createProfileSaga() {
  yield takeLatest(constants.CREATE_REQUEST, createProfile);
}
