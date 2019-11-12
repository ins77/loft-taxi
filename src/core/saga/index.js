import { all } from 'redux-saga/effects';

import { signInSaga, signUpSaga } from '../../App/containers/AuthPage/store';
import { fetchProfileSaga, createProfileSaga } from '../../App/containers/ProfilePage/store';
import { addressListSaga } from '../../App/containers/TaxiCallForm/store';
import { mapRouteSaga } from '../../App/containers/MapPage/store';

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
