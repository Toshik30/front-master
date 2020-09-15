import React, { forwardRef } from 'react';
import styles from './checkbox.module.scss';

export const Checkbox = forwardRef(({ disabled, onChange, children, ...props }, ref) => (
  <label className={styles.label}>
    <input
      type="checkbox"
      className="checkbox"
      disabled={disabled}
      onChange={onChange}
      ref={ref}
      {...props}
    />
    {children}
  </label>
));

Checkbox.defaultProps = {
  disabled: false,
  onChange: () => {
  },
};
