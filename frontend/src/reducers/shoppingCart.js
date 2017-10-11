import { ADD_PRODUCT_TO_CART } from '../actions/shoppingCart';

const initialState = {
  items: [],
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const { product } = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            count: 1, // TODO: update count if already exists
          },
        ],
      };
    }

    default:
      return state;
  }
};
