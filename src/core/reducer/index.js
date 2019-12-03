import { combineReducers } from 'redux';

import auth from '../../App/containers/withAuthLayout/store';
import mapbox from '../../App/containers/MapPage/store';
import profile from '../../App/containers/ProfilePage/store';

const rootReducer = combineReducers({
  auth,
  profile,
  mapbox,
});

export default rootReducer;
