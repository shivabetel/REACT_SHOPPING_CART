import { srGetProducts } from '../../sources/products'

export const getProducts = function (filters) {
    return async (dispatch, getState) => {
     let response = {};
     response = await srGetProducts(filters);
     dispatch({
         type: 'FETCH_PRODUCTS',
         payload: response
     })
    }
}

export const addProduct = function (product){
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}