import { combineReducers } from 'redux';
import loginReducers from './login';
import apiReducers from './api';

const rootReducers = combineReducers({
    login: loginReducers,
    api: apiReducers,
});

export default rootReducers;