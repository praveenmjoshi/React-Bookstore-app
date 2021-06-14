import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"
import Axios from 'axios';

export const listProducts = (queryParams) => async(dispatch) => {
    const { category } = queryParams
    let url = '/bookstore/books'
    if(category){
        url += `?category=${category}`
    }
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try{
        const { data } = await Axios.get(url);
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
}

export const searchProducts = (searchText) => async(dispatch) => {
    let url = '/bookstore/search';
    if(searchText){
        url += `?query=${searchText}`
    }
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try{
        const { data } = await Axios.get(url);
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
}

export const productDetails = (productId) => async(dispatch) =>{
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId})
    try{
        const {data} = await Axios.get(`/bookstore/book/${productId}`)
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data})
    }catch(error){
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        });
    }
};