import { lazy } from 'react';
import { importRetry } from 'utils/dynamicImport';
import { EMPLOYEE_ADD_PATH, EMPLOYEES_PATH, LOGIN_PATH, ROOT_PATH, SIGNUP_PATH } from './routePaths';


const imports = {
  employees: () => import('components/employees/Employees.js'),
  addEmployee: () => import('components/addEmployee/AddEmployee.js'),
  signUp: () => import('components/auth/SignUp'),
  login: () => import('components/auth/Login'),
};

const routesConfig = [
  {
    text: 'Employees',
    path: [ROOT_PATH, EMPLOYEES_PATH],
    exact: true,
    private: true,
    component: lazy(() => importRetry(imports.employees)),
  },
  {
    text: 'Add Employee',
    path: EMPLOYEE_ADD_PATH,
    exact: true,
    private: true,
    component: lazy(() => importRetry(imports.addEmployee)),
  },
  {
    text: 'Sign Up',
    path: SIGNUP_PATH,
    exact: true,
    private: false,
    component: lazy(() => importRetry(imports.signUp)),
  },
  {
    text: 'Login',
    path: LOGIN_PATH,
    exact: true,
    private: false,
    component: lazy(() => importRetry(imports.login)),
  },
];

export default routesConfig;
