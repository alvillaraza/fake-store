import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
  cart: [],
  quantity: 0,
  cartTotal: 0,
};

function cartReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_CART:
        //    let addedItem = state.products.find((item) => item.id === action.id);
        //    //check if the action id exists in the addedItems
        //    let existed_item = state.cart.find(
        //      (item) => action.id === item.id
        //    );
        //    if (existed_item) {
        //      addedItem.quantity += 1;
        //      return {
        //        ...state,
        //        cartTotal: state.cartTotal + addedItem.price,
        //      };
        //    } else {
        //      addedItem.quantity = 1;
        //      //calculating the total
        //      let newTotal = state.cartTotal + addedItem.price;

        //      return {
        //        ...state,
        //        cart: [...state.cart, addedItem],
        //        cartTotal: newTotal,
        //      };
        //    }

        return {
          ...state,
          cart: [...state.cart, action.payload],
          // have to figure out quantity https://medium.com/@ayabellazreg/make-a-simple-shopping-cart-app-using-react-redux-part-3-32b182e02cc9
          quantity: state.quantity + 1,
          cartTotal: state.cartTotal + action.payload.price,
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          //need to figure out what to do when there's multiples of the same item, should we do a quantity state?
          cart: state.cart,
          //       .filter((eachItem) => {
          //   return eachItem.id !== action.payload.id;
          // }),
          // need to fix this so that it doesn't come up with a weird long number at times
          cartTotal: state.cartTotal - action.payload.price,
        };
        default:
        return state;
    }
}
export default cartReducer;