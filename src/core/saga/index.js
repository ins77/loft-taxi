import { all } from 'redux-saga/effects';

import { signInSaga, signUpSaga } from '../../App/containers/withAuthLayout/store';
import { fetchProfileSaga, createProfileSaga } from '../../App/containers/ProfilePage/store';
import { routesSaga, addressesSaga } from '../../App/containers/MapPage/store';

export default function* rootSaga() {
  yield all([
    signInSaga(),
    signUpSaga(),
    fetchProfileSaga(),
    createProfileSaga(),
    addressesSaga(),
    routesSaga(),
  ]);
}
