import {
  FETCH_ALL_PRODUCTS_LOADING,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_FAILURE,
  UPDATE_CATEGORY,
  UPDATE_QUERY,
  OPEN_SIDEBAR,
  ADD_TO_CART,
  ADD_QTY,
  SUBTRACT_QTY,
  REMOVE_FROM_CART,
} from "../actions/actions";

const initialState = {
  products: [],
  currentCategory: "",
  currentQuery: "",
  sidebarItem: [], 
  sidebarOpen: false,

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
    case OPEN_SIDEBAR:
      return {
        ...state,
        sidebarOpen: action.payload,
      }
    case ADD_TO_CART:
      let productsCopy = [...state.products];
      productsCopy.forEach((product) => {
        if (product.id === action.payload) {
          product.qty = product.qty + 1;
          product.inCart = true;
        }
      });
      return {
        ...state,
        products: productsCopy,
        sidebarItem: action.payload,
             
      };
    case ADD_QTY:
      let productsToAddFrom = [...state.products];
      productsToAddFrom.forEach((product) => {
        if (product.id === action.payload) {
          product.qty = product.qty + 1;
        }
      });
      return {
        ...state,
        products: productsToAddFrom,
      };
    case SUBTRACT_QTY:
      let productsToSubtractFrom = [...state.products];
      productsToSubtractFrom.forEach((product) => {
        if (product.id === action.payload) {
          product.qty = product.qty - 1;
        }
      });
      return {
        ...state,
        products: productsToSubtractFrom,
      };
    case REMOVE_FROM_CART:
      let productsRemove = [...state.products];
      productsRemove.forEach((product) => {
        if (product.id === action.payload) {
          product.inCart = false;
          product.qty = 0;
        }
      });

      return {
        ...state,
        products: productsRemove,
      };
    default:
      return state;
  }
}

export default reducers;
