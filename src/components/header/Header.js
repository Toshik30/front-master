import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from 'assets/images/logo.svg';
import {
  CUSTOMERS_PATH,
  EMPLOYEES_PATH,
  HELP_PATH,
  INVOICE_PATH,
  LOGIN_PATH,
  ROOT_PATH,
  SETTINGS_PATH,
  TIMECARDS_PATH,
} from 'routes/routePaths';
import { useSelector, useDispatch } from 'react-redux';
import { getIsAuthorized } from 'store/selectors';
import { logoutUser } from 'store/actions';
import styles from './header.module.scss';


const Header = () => {
  const isAuthorized = useSelector(getIsAuthorized);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logoutUser());

  if (!isAuthorized) {
    return <header>
      <div className="container">
        <Link to={ROOT_PATH}><img src={logo} alt="ez-clock-logo" /></Link>
        <ul className={styles.account}>
          <li><Link to={HELP_PATH}>Help</Link></li>
          <li><Link to={LOGIN_PATH}>Log In</Link></li>
        </ul>
      </div>
    </header>;
  }

  return (
    <header>
      <div className="container">
        <Link to={ROOT_PATH}><img src={logo} alt="ez-clock-logo" /></Link>
        <ul className={styles.navigation}>
          <li>
            <NavLink to={EMPLOYEES_PATH} activeClassName={styles.active}>Employees</NavLink>
          </li>
          <li>
            <NavLink to={CUSTOMERS_PATH} activeClassName={styles.active}>Customers</NavLink>
          </li>
          <li>
            <NavLink to={INVOICE_PATH} activeClassName={styles.active}>Invoice</NavLink>
          </li>
          <li>
            <NavLink to={TIMECARDS_PATH} activeClassName={styles.active}>Timecards</NavLink>
          </li>
        </ul>
        <ul className={styles.account}>
          <li><Link to={HELP_PATH}>Help</Link></li>
          <li><Link to={SETTINGS_PATH}>Settings</Link></li>
          <li onClick={handleLogout}><span>Log out</span></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
