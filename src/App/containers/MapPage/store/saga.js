import { takeLatest, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import * as constants from './constants';
import * as api from '../../../../core/utils/api';

function* fetchRoutes({ payload }) {
  const { address1, address2 } = payload;

  try {
    const result = yield call(api.fetchRoutes, address1, address2);
    yield put(actions.fetchRoutesSuccess(result));
  } catch ({ message, error }) {
    yield put(actions.fetchRoutesFailure(error || message))
  }
}

function* fetchAddresses() {
  try {
    const { addresses } = yield call(api.fetchAddresses);
    yield put(actions.fetchAddressesSuccess(addresses));
  } catch ({ message, error }) {
    yield put(actions.fetchAddressesFailure(error || message))
  }
}

export function* addressesSaga() {
  yield takeLatest(constants.FETCH_ADDRESSES_REQUEST, fetchAddresses);
}

export function* routesSaga() {
  yield takeLatest(constants.FETCH_ROUTES_REQUEST, fetchRoutes);
}
