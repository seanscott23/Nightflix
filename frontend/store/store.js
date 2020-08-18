import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => {
    return createStore(()=> ({}), preloadedState, applyMiddleware(thunk))
}

export default configureStore;