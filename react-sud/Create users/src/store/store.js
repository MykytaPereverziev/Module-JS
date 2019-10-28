import {createStore, combineReducers} from 'redux';
import userReducer from './reducer';

const initialState = {
    userInfo: userReducer,
};

const rootReducer = combineReducers(initialState);

const store = createStore(rootReducer);

export default store;