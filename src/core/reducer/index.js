import { combineReducers } from 'redux';

import signIn from '../../App/store/signIn';
import signUp from '../../App/store/signUp';
import userCard from '../../App/store/userCard';
import userCardForm from '../../App/store/userCardForm';

const rootReducer = combineReducers({
  signIn,
  signUp,
  userCard,
  userCardForm,
});

export default rootReducer;
