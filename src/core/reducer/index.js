import { combineReducers } from 'redux';

import signIn from '../../App/store/signIn';
import signUp from '../../App/store/signUp';
import addressList from '../../App/store/addressList';
import mapRoute from '../../App/store/mapRoute';
import profile from '../../App/store/profile';

const rootReducer = combineReducers({
  signIn,
  signUp,
  profile,
  addressList,
  mapRoute,
});

export default rootReducer;
