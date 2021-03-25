import {
  FETCH_ALL_PRODUCTS_LOADING,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
} from "../actions/actions";

const initialState = {
  products: [],

  //     title: "",
  //   description: "",
  //   price: 0,
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
    default:
      return state;
  }
}

export default reducers;
