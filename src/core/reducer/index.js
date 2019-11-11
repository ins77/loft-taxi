import { combineReducers } from 'redux';

import signIn from '../../App/store/signIn';
import signUp from '../../App/store/signUp';
import userCard from '../../App/store/userCard';
import addressList from '../../App/store/addressList';
import mapRoute from '../../App/store/mapRoute';

const rootReducer = combineReducers({
  signIn,
  signUp,
  userCard,
  addressList,
  mapRoute,
});

export default rootReducer;
