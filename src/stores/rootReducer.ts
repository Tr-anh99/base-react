import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './user.store.ts';
import globalReducer from './global.store.ts';

const rootReducer = combineReducers({
  user: userReducer,
  global: globalReducer,
});

export default rootReducer;
