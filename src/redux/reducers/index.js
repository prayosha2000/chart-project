import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  isAuthenticated: authReducer,
});

export default rootReducer;
