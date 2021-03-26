import {
  FETCH_ALL_PRODUCTS_LOADING,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  ADD_TO_CART,
  UPDATE_CATEGORY,
} from "../actions/actions";

const initialState = {
  products: [],
  currentCategory: "",
  cart: [],

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
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
}

export default reducers;
