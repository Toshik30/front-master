import React, { forwardRef, useState } from 'react';
import classNames from 'classnames';
import Dropdown, { DropdownMenu, DropdownToggle, MenuItem } from '@trendmicro/react-dropdown';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
import styles from './dropdown.module.scss';


const CustomToggle = ({ children, className, onClick, touched, error, ...otherProps }) =>
  <button
    onClick={(event) => {
      event.preventDefault();
      onClick();
    }}
    className={classNames(
      className,
      'input',
      { error: error && !touched },
      styles.toggle,
      { [styles.muted]: !touched },
    )}
    {...otherProps}
  >
    <span>{children}</span>
    <i className={classNames('icon-arrow-down', { [styles.active]: otherProps['aria-expanded'] })} />
  </button>;

// eslint-disable-next-line react/no-multi-comp
const CustomDropdown = forwardRef(({ className, label, title, required, optionsConfig, name, error }, ref) => {
  const [selectedOption, setSelectedOption] = useState(title);
  const touched = selectedOption !== title;

  const handleSelect = (option) => {
    setSelectedOption(option.label || option.value);
  };

  const optionsRender = (options) => options.map((option, index) => (option.label || option.value)
    ? <MenuItem className={styles.item} key={index} eventKey={option}>
      <div className={styles.itemInner}>
        <input
          type="radio"
          name="radio"
          className={classNames('radio', { checked: (option.label || option.value) === selectedOption })}
        />
        <span>{option.label || option.value}</span>
      </div>
      {option.options && optionsRender(option.options)}
    </MenuItem>
    : <MenuItem key={index} divider />,
  );

  return (
    <div className={classNames(styles.wrapper, className)}>
      <p className={classNames(styles.label, { [styles.required]: required })}>{label || title}</p>
      <Dropdown className={styles.container} onSelect={handleSelect}>
        <DropdownToggle
          title={selectedOption}
          componentClass={CustomToggle}
          noCaret
          touched={touched}
          error={error}
        />
        <DropdownMenu className={styles.list}>
          {optionsRender(optionsConfig)}
        </DropdownMenu>
        {name && <input type="hidden" name={name} ref={ref} value={selectedOption !== title ? selectedOption : ''} />}
        {error && !touched && <p className={styles.error}>{error}</p>}
      </Dropdown>
    </div>
  );
});

CustomDropdown.defaultProps = {
  title: 'Select',
  optionsConfig: [
    {
      label: 'Item 1',
      value: 'Item 1',
      options: [
        {
          label: 'Item 2',
          value: 'Item 2',
        },
        {
          label: 'Item 3',
          value: 'Item 3',
          action: () => {
          },
        },
      ],
    },
    {},
    {
      label: 'Item 2',
      value: 'Item 2',
    },
    {
      label: 'Item 3',
      value: 'Item 3',
      action: () => {
      },
    },
  ],
};

export default CustomDropdown;
