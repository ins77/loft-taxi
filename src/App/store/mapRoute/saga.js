import { takeLatest, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import * as constants from './constants';
import * as api from '../../../core/utils/api';

function* fetchRoute({ payload }) {
  const { address1, address2 } = payload;

  try {
    const result = yield call(api.fetchRoute, address1, address2);
    yield put(actions.fetchRouteSuccess(result));
  } catch ({ message, error }) {
    yield put(actions.fetchRouteFailure(error || message))
  }
}

export function* mapRouteSaga() {
  yield takeLatest(constants.REQUEST, fetchRoute);
}
