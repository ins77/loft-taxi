import { combineReducers } from 'redux';

import signIn from '../../App/store/signIn';
import signUp from '../../App/store/signUp';
import userCard from '../../App/store/userCard';

const rootReducer = combineReducers({
  signIn,
  signUp,
  userCard,
});

export default rootReducer;
