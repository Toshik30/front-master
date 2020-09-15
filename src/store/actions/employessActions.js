export const GET_EMPLOYEES_LIST = 'GET_EMPLOYEES_LIST';
export const getEmployeesList = () => ({ type: GET_EMPLOYEES_LIST });


export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const addEmployee = (payload) => ({ type: ADD_EMPLOYEE, payload });
