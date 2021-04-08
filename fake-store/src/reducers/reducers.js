import {
  FETCH_ALL_PRODUCTS_LOADING,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  UPDATE_CATEGORY,
  UPDATE_QUERY,
  ADD_TO_CART,
} from "../actions/actions";

const initialState = {
  products: [],
  currentCategory: "",
  currentQuery: "",

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

    case UPDATE_QUERY:
      return {
        ...state,
        currentQuery: action.payload,
      };

    case ADD_TO_CART:
      let productsCopy = [...state.products];
      productsCopy.forEach((product) => {
        if (product.id === action.payload) {
          product.qty = product.qty + 1;
          product.inCart = true;
          product.price = product.price * product.qty;
        }
      });

      return {
        ...state,
        products: productsCopy,
      };
    default:
      return state;
  }
}

export default reducers;
