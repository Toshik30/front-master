import React, { useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getIsEmployeesListEmpty } from 'store/selectors';
import Sidebar from 'components/sidebar/Sidebar';
import AddEmployee from 'components/addEmployee/AddEmployee';
import Employer from 'components/employer/Employer';
import styles from './employees.module.scss';


const Employees = () => {
  const [selectedEmployer, setSelectedEmployer] = useState();
  const isEmployeesEmpty = useSelector(getIsEmployeesListEmpty);

  if (isEmployeesEmpty) {
    return <AddEmployee />;
  }

  return (
    <div className={classNames('container', styles.employees)}>
      <Sidebar selectMember={setSelectedEmployer} />
      <Employer employer={selectedEmployer} />
    </div>
  );
};

export default Employees;
