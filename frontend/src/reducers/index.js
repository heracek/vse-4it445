import { combineReducers } from 'redux';

const dummy = (state = null, action) => {
  console.log('---- action:', action);
  return state;
}

const defaultShoppingCart = {
  1: {
    product: {
      id: 3,
      title: 'Moped',
      price: '1 000',
      shortInfo:' No comment.'
    },
    count: 2,
  },
};

const shoppingCart = (state = { ...defaultShoppingCart }, action) => {
  return state;
}

export const rootReducer = combineReducers({
  dummy,
  shoppingCart,
});
