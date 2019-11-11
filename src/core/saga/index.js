import { all } from 'redux-saga/effects';

import { signInSaga } from '../../App/containers/SignIn/store';
import { signUpSaga } from '../../App/containers/SignUp/store';
import { fetchProfileSaga, createProfileSaga } from '../../App/containers/ProfilePage/store';
import { addressListSaga } from '../../App/containers/MapPage/store/addressList';
import { mapRouteSaga } from '../../App/containers/MapPage/store/mapRoute';

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
