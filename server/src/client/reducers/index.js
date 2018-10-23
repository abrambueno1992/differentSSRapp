import usersReducer from './userReducer';
import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    users: usersReducer,
    aut: authReducer
});