import React, { useEffect } from 'react';
import { getActiveModal } from 'store/selectors';
import { toggleShowModal } from 'store/actions';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Portal from 'components/portal/Portal';
import * as modals from '../modals';
import styles from './modalWrapper.module.scss';

const ModalWrapper = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const modalFromStore = useSelector(getActiveModal);
  const modalName = (new URLSearchParams(location.search)).get('modalName');
  const RenderModal = modalFromStore.name ? modals[modalFromStore.name] : modals[modalName];
  const { name, ...props } = modalFromStore;

  useEffect(() => {
    dispatch(toggleShowModal({}));
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!RenderModal) {
    return null;
  }

  return (
    <Portal id="modal">
      <div className={styles.modal}>
        <RenderModal {...props} />
      </div>
    </Portal>
  );
};


export default ModalWrapper;
