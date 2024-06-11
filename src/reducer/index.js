import {combineReducers} from 'redux';

import loginReducer from './loginReducer';

const createRootReducer = () =>
  combineReducers({
    auth: loginReducer,
  });

export default createRootReducer;
