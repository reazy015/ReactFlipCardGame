import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReduce from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReduce, initialState, applyMiddleware(...middleware));

export default store;