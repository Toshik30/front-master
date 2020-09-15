import React, { useEffect } from 'react';
import MembersList from 'components/membersList/MembersList';
import Search from 'UI/input-search/Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getEmployeesList } from 'store/selectors';
import { EMPLOYEE_ADD_PATH } from 'routes/routePaths';
import styles from './sidebar.module.scss';

const Sidebar = ({ selectMember }) => {
  const employeesList = useSelector(getEmployeesList);

  useEffect(() => {
    selectMember(employeesList[0]);
  }, [employeesList, selectMember]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.head}>
        <Search className={styles.search} />
        <Link to={EMPLOYEE_ADD_PATH} className={styles.addMember}>
          <button className="button primary round">
            <i className="icon-plus"/>
          </button>
          <p>Add profile</p>
        </Link>
      </div>
      <MembersList onSelect={selectMember} list={employeesList}/>
    </aside>
  );
};

export default Sidebar;
