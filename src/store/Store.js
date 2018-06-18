import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';


import reducer from '../reducers/ResumeReducer';

const middleware = applyMiddleware(createLogger(), thunk);
//configureStore(preloadedState)

let store = createStore(reducer, middleware);


export default store;
