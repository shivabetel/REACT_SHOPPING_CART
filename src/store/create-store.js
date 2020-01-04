import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer'

const middlewares = [
    thunkMiddleware
]

export default function(preloadedState= {}) {
    return createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));
}