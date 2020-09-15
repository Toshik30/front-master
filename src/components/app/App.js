import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/header/Header';
import ModalWrapper from 'components/modalWrapper/ModalWrapper';
import { useDispatch } from 'react-redux';
import { getUser } from 'store/actions';
import Routes from 'routes/routes';
import styles from './app.module.scss';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(dispatch));
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Routes />
        <ModalWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
