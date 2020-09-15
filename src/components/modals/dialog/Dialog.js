import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './dialog.module.scss';


const Dialog = (
  {
    title,
    description,
    cancel,
    btnTextCancel,
    btnTextConfirm,
    btnClassConfirm,
    confirm,
  }) => (
  <div className={styles.modal}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.description}>{description}</p>
    <div className={styles.buttonsWrapper}>
      <div onMouseUp={cancel} className="button danger">
        {btnTextCancel}
      </div>
      <div onMouseUp={confirm} className={classNames('button', btnClassConfirm)}>
        {btnTextConfirm}
      </div>
    </div>
  </div>
);

Dialog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  btnTextCancel: PropTypes.string,
  btnTextConfirm: PropTypes.string,
  confirm: PropTypes.func,
  cancel: PropTypes.func,
};

Dialog.defaultProps = {
  title: '',
  description: '',
  btnTextCancel: 'Cancel',
  btnTextConfirm: 'Confirm',
  btnClassConfirm: 'primary',
  confirm: () => {
  },
  cancel: () => {
  },
};

export default Dialog;
