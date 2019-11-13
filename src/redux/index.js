import { combineReducers } from 'redux';

import signIn from './signIn';
import signUp from './signUp';
import userCard from './userCard';
import userCardForm from './userCardForm';

export default combineReducers({
  signIn,
  signUp,
  userCard,
  userCardForm,
});
