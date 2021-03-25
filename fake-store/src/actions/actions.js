import axios from 'axios';

export const FETCH_ALL_PRODUCTS_LOADING = "FETCH_ALL_PRODUCTS_LOADING";
export const FETCH_ALL_PRODUCTS_SUCCESS = "FETCH_ALL_PRODUCTS_SUCCESS";
export const FETCH_ALL_PRODUCTS_FAILURE = "FETCH_ALL_PRODUCTS_FAILURE";

export const fetchAllProducts = () => (dispatch) => {
    console.log("!", dispatch);
    dispatch({ type: FETCH_ALL_PRODUCTS_LOADING });
    axios
        .get("https://fakestoreapi.herokuapp.com/products")
        .then((response) => {
            console.log('res', response.data)
            dispatch({ type: FETCH_ALL_PRODUCTS_SUCCESS, payload: response.data });
        })
        .catch((err) => {
            dispatch({ type: FETCH_ALL_PRODUCTS_FAILURE, payload: err });
        
        });
};
