import {
  FETCH_ALL_PRODUCTS_LOADING,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  FETCH_ONE_PRODUCT_SUCCESS,
  UPDATE_CATEGORY,
} from "../actions/actions";

const initialState = {
  products: [],
  currentCategory: "",

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
    default:
      return state;
  }
}

export default reducers;
