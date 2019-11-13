import { combineReducers } from 'redux';

import auth from '../../App/containers/AuthPage/store';
import mapRoute from '../../App/containers/MapPage/store';
import addressList from '../../App/containers/AddressesForm/store';
import profile from '../../App/containers/ProfilePage/store';

const rootReducer = combineReducers({
  auth,
  profile,
  addressList,
  mapRoute,
});

export default rootReducer;
