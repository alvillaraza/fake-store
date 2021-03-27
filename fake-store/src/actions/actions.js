import axios from 'axios';

export const FETCH_ALL_PRODUCTS_LOADING = "FETCH_ALL_PRODUCTS_LOADING";
export const FETCH_ALL_PRODUCTS_SUCCESS = "FETCH_ALL_PRODUCTS_SUCCESS";
export const FETCH_ALL_PRODUCTS_FAILURE = "FETCH_ALL_PRODUCTS_FAILURE";
export const FETCH_ONE_PRODUCT_SUCCESS = "FETCH_ALL_PRODUCTS_SUCCESS";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUERY = "UPDATE_QUERY";

export const fetchAllProducts = () => (dispatch) => {
    dispatch({ type: FETCH_ALL_PRODUCTS_LOADING });
    axios
        .get("https://fakestoreapi.herokuapp.com/products")
        .then((response) => {
            dispatch({ type: FETCH_ALL_PRODUCTS_SUCCESS, payload: response.data });
        })
        .catch((err) => {
            dispatch({ type: FETCH_ALL_PRODUCTS_FAILURE, payload: err });
        
        });
};

export const updateCategory = (category) => (dispatch) => {
    dispatch({ type: UPDATE_CATEGORY, payload: category });
}

export const addToCart = (addCartItem) => (dispatch) => {
    dispatch({ type: ADD_TO_CART, payload: addCartItem});
}

export const removeFromCart = (removeCartItem) => (dispatch) => {
    dispatch({type: REMOVE_FROM_CART, payload: removeCartItem})
}

export const updateQuery = (query) => dispatch => {
    dispatch({type: UPDATE_QUERY, payload: query})
}