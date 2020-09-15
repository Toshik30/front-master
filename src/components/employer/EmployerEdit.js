import React from 'react';
import { useForm } from 'react-hook-form';
import Input from 'UI/input-text/Input';
import Dropdown from 'UI/dropdown/Dropdown';
import { POSITIONS_SELECT } from 'components/employer/constants';
import styles from './employer.module.scss';


const EmployerEdit = ({ onEditFinish }) => {
  const { register } = useForm();

  return (
    <div className={styles.editForm}>
      <div className={styles.group}>
        <Input ref={register} name="phone" className={styles.groupItem} placeholder="Phone" required />
        <Dropdown optionsConfig={POSITIONS_SELECT} className={styles.groupItem} title="cart/bag" name="position" />
        <Input ref={register} name="rate" className={styles.groupItem} placeholder="Rate" required />
      </div>
      <Input ref={register} name="address" placeholder="Address" required />
      <Input ref={register} name="info" label="Additional information" />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Manager</th>
            <th>Created Art</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MATT</td>
            <td>Monday, June,15, 2020 06:02 PM</td>
            <td>Comments</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.footer}>
        <button className="button primary">Add report</button>
        <button className="button primary">Add document</button>
        <button className="button success" onClick={onEditFinish}>Save</button>
      </div>
    </div>
  );
};

export default EmployerEdit;
