import { combineReducers } from 'redux';

import signIn from '../../App/containers/SignIn/store';
import signUp from '../../App/containers/SignUp/store';
import addressList from '../../App/containers/MapPage/store/addressList';
import mapRoute from '../../App/containers/MapPage/store/mapRoute';
import profile from '../../App/containers/ProfilePage/store';

const rootReducer = combineReducers({
  signIn,
  signUp,
  profile,
  addressList,
  mapRoute,
});

export default rootReducer;
