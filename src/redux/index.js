import { combineReducers } from 'redux';

import signIn from './signIn';
import signUp from './signUp';
import signInForm from './signInForm';
import signUpForm from './signUpForm';
import userCard from './userCard';
import userCardForm from './userCardForm';

export default combineReducers({
  signIn,
  signUp,
  userCard,
  signInForm,
  signUpForm,
  userCardForm,
});
