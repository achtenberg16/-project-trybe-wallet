import { combineReducers } from 'redux';
import wallet from './wallet';
import user from './user';

const rootReducer = combineReducers({ wallet, user });

export default rootReducer;
