import { all } from 'redux-saga/effects';

import { signInSaga } from '../../App/store/signIn';
import { signUpSaga } from '../../App/store/signUp';
import { userCardSaga } from '../../App/store/userCard';

export default function* rootSaga() {
  yield all([
    signInSaga(),
    signUpSaga(),
    userCardSaga(),
  ]);
}
