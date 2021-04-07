import Cart from "../pages/Cart";
// 
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// export const addToCart = (addCartItem) => (dispatch) => {
//   dispatch({ type: ADD_TO_CART, payload: addCartItem });
// };

export const removeFromCart = (removeCartItem) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: removeCartItem });
};