import { combineReducers } from 'redux';

const dummyReducer = (state = null, action) => {
  console.log('---- action:', action);
  return state;
};

// TEMPORARY TEST DATA
const shoppingCartInitialState = {
  items: [
    {
      product: {
        id: 3,
        title: 'Moped',
        price: '1 000',
        shortInfo: ' No comment.',
      },
      count: 2,
    },
  ],
};

const shoppingCartReducer = (state = shoppingCartInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  dummy: dummyReducer,
  shoppingCart: shoppingCartReducer,
});
