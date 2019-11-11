import { all } from 'redux-saga/effects';

import { signInSaga } from '../../App/store/signIn';

export default function* rootSaga() {
  yield all([signInSaga()]);
}
