import {
  FETCH_ALL_PRODUCTS_LOADING,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  UPDATE_CATEGORY,
  ADD_TO_CART,
  UPDATE_CART_TOTAL,
} from "../actions/actions";

const initialState = {
  products: [],
  currentCategory: "",
  cart: [],
  cartTotal: 0,

  isFetching: false,
  error: null,
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
      };
    case FETCH_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
          cart: [...state.cart, action.payload],
          cartTotal: state.cartTotal + action.payload.price
      };
    //   case UPDATE_CART_TOTAL:
    //       return {
    //           ...state,
    //       }
    default:
      return state;
  }
}

export default reducers;
