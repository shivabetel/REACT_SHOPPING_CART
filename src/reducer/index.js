import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { filterReducer } from './filter';
import { cartReducer } from './cart'

export default combineReducers({
    products: productsReducer,
    filter: filterReducer,
    cart: cartReducer
})