import axios from "axios";

export const FETCH_ALL_PRODUCTS_LOADING = "FETCH_ALL_PRODUCTS_LOADING";
export const FETCH_ALL_PRODUCTS_SUCCESS = "FETCH_ALL_PRODUCTS_SUCCESS";
export const FETCH_ALL_PRODUCTS_FAILURE = "FETCH_ALL_PRODUCTS_FAILURE";
export const FETCH_ONE_PRODUCT_SUCCESS = "FETCH_ALL_PRODUCTS_SUCCESS";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_QUERY = "UPDATE_QUERY";
export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_QTY = "ADD_QTY";
export const SUBTRACT_QTY = "SUBTRACT_QTY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";


export const fetchAllProducts = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_PRODUCTS_LOADING });
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      let newArray = response.data.map((product) => {
        return { ...product, qty: 0, inCart: false };
      });
      dispatch({ type: FETCH_ALL_PRODUCTS_SUCCESS, payload: newArray });
    })
    .catch((err) => {
      dispatch({ type: FETCH_ALL_PRODUCTS_FAILURE, payload: err });
    });
};

export const updateCategory = (category) => (dispatch) => {
  dispatch({ type: UPDATE_CATEGORY, payload: category });
};

export const updateQuery = (query) => (dispatch) => {
  dispatch({ type: UPDATE_QUERY, payload: query });
};

export const sidebarOpen = (value) => (dispatch) => {
  dispatch ({type: OPEN_SIDEBAR, payload: value})
}

export const addToCart = (id) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: id });
};

export const addQty = (id) => (dispatch) => {
  dispatch({ type: ADD_QTY, payload: id });
};
export const subtractQty = (id) => (dispatch) => {
  dispatch({ type: SUBTRACT_QTY, payload: id });
};
export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id })
};