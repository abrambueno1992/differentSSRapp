import usersReducer from './userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    users: usersReducer
});