import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './input.module.scss';


const Input = forwardRef((
  {
    className,
    required,
    disabled,
    label,
    type = 'text',
    error = false,
    success = false,
    ...otherProps
  },
  ref) => {
  return (
    <div className={classNames(styles.wrapper, className, { disabled })}>
      <p className={classNames(styles.label, { [styles.required]: required })}>{label || otherProps.placeholder}</p>
      <input type={type} className={classNames('input', { error })} ref={ref} {...otherProps} />
      {error && <p className={styles.error}>{error}</p>}
      {success && <i className="icon-check" />}
    </div>
  );
});

export default Input;
