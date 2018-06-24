import { combineReducers } from 'redux';

import  userReducer from '@reducers/user';
import  tripsReducer from '@reducers/trips';

export default combineReducers({
  user: userReducer,
  trips: tripsReducer
});