import { combineReducers } from 'redux';

import { dummyReducer } from './dummy';
import { shoppingCartReducer } from './shoppingCart';

export const rootReducer = combineReducers({
  dummy: dummyReducer,
  shoppingCart: shoppingCartReducer,
});
