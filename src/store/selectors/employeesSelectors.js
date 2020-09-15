import { get, isEmpty } from 'lodash';
import { createSelector } from 'reselect';

export const getEmployeesList = (state) => get(state, 'employees.list');

export const getIsEmployeesListEmpty = createSelector(
  getEmployeesList,
  isEmpty,
);
