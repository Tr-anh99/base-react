import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/store';
import globalReducer from './global.store';

const rootReducer = combineReducers({
  auth: authReducer,
  global: globalReducer,
});

export default rootReducer;
