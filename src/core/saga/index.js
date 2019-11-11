import { all } from 'redux-saga/effects';

import { signInSaga } from '../../App/store/signIn';
import { signUpSaga } from '../../App/store/signUp';
import { fetchProfileSaga, createProfileSaga } from '../../App/store/profile';
import { addressListSaga } from '../../App/store/addressList';
import { mapRouteSaga } from '../../App/store/mapRoute';

export default function* rootSaga() {
  yield all([
    signInSaga(),
    signUpSaga(),
    fetchProfileSaga(),
    createProfileSaga(),
    addressListSaga(),
    mapRouteSaga(),
  ]);
}
