export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export const addProductToCart = product => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {
    product,
  },
});
