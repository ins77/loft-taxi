import { takeLatest, call, put } from 'redux-saga/effects';

import * as actions from './actions';
import * as constants from './constants';
import * as api from '../../../../../core/utils/api';

function* fetchAddressList() {
  try {
    const { addresses } = yield call(api.fetchAddressList);
    yield put(actions.fetchAddressListSuccess(addresses));
  } catch ({ message, error }) {
    yield put(actions.fetchAddressListFailure(error || message))
  }
}

export function* addressListSaga() {
  yield takeLatest(constants.REQUEST, fetchAddressList);
}
