import { combineReducers } from 'redux';
import user from './userReducer';
import employees from './employeesReducer';


export default combineReducers({
  user,
  employees,
});
