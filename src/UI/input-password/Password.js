import React, { forwardRef, useCallback, useState } from 'react';
import classNames from 'classnames';
import styles from './password.module.scss';


const PASSWORD = 'password';
const TEXT = 'text';

const Password = forwardRef(({ label, className, error = false, ...otherProps }, ref) => {
  const [inputType, setInputType] = useState(PASSWORD);
  const isHidden = inputType === PASSWORD;

  const handleClick = useCallback(() => {
    isHidden ? setInputType(TEXT) : setInputType(PASSWORD);
  }, [isHidden]);

  return (
    <div className={styles.wrapper}>
      <p className={classNames(styles.label, styles.required)}>{label || otherProps.placeholder}</p>
      <input type={inputType} className={classNames('input', { error })} ref={ref} {...otherProps} />
      {error && <p className={styles.error}>{error}</p>}
      <i onClick={handleClick} className={isHidden ? 'icon-eye' : 'icon-eye-slash'} />
    </div>
  );
});

export default Password;
