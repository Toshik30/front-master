import React from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import addEmployeeImg from 'assets/images/add-employee.svg';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Input from 'UI/input-text/Input';
import { yupResolver } from '@hookform/resolvers';
import { addEmployee } from 'store/actions';
import * as yup from 'yup';
import { EMPLOYEES_PATH } from 'routes/routePaths';
import { phoneRegExp } from 'utils/constants';
import styles from './addEmployee.module.scss';


const schema = yup.object().shape({
  name: yup.string().required('* Required'),
  phone: yup.string().required('* Required').matches(phoneRegExp, 'Phone number is not valid'),
  title: yup.string().required('* Required'),
  rate: yup.string().required('* Required').matches(/^[0-9]*$/, 'Rate value is not valid'),
});

const AddEmployee = () => {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const { isValid } = formState;
  const onSubmit = (data) => {
    dispatch(addEmployee(data));
    history.push({
      pathname: EMPLOYEES_PATH,
    });
  };

  return (
    <div className={classNames('container', 'main', styles.addEmployee)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create new employee:</h1>
        <Input
          name="name"
          success={isValid}
          error={errors.name?.message}
          ref={register}
          placeholder="Full name"
          required
        />
        <Input
          name="phone"
          success={isValid}
          error={errors.phone?.message}
          ref={register}
          placeholder="Phone number"
          required
        />
        <Input
          name="title"
          success={isValid}
          error={errors.title?.message}
          ref={register}
          placeholder="Job title"
          required
        />
        <Input
          name="rate"
          success={isValid}
          error={errors.rate?.message}
          ref={register}
          placeholder="Pay rate"
          required
        />
        <button disabled={!isValid} type="submit" className="button primary w100">Create</button>
      </form>
      <img src={addEmployeeImg} alt="add-employee" />
    </div>
  );
};

export default AddEmployee;
