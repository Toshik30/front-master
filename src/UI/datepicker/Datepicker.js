import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './datepicker.module.scss';

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  // eslint-disable-next-line react/no-multi-comp,no-unused-vars
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={styles.datepicker}>
      <i className="icon-arrow-down"/>
      <strong onClick={onClick}>{value}</strong>
      <i className="icon-calendar"/>
      <i className="icon-arrow-down"/>
    </div>
  ));

  return (
    <DatePicker
      selected={startDate}
      onChange={setStartDate}
      customInput={<CustomInput />}
      showWeekNumbers
    />
  );
};

export default Datepicker;
