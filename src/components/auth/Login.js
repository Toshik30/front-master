import { USER } from 'variables';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import loginImg from 'assets/images/login.svg';
import { LOGIN_FORM_INPUTS, loginSchema } from 'components/auth/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { setUserSuccess } from 'store/actions';
import { getIsAuthorized } from 'store/selectors';
import { Link, Redirect } from 'react-router-dom';
import { FORGOT_PATH, ROOT_PATH, SIGNUP_PATH } from 'routes/routePaths';
import styles from './auth.module.scss';


const Login = () => {
  const isAuthorized = useSelector(getIsAuthorized);
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = useCallback(({ password, passwordConfirm, ...otherData }) => {
    localStorage.setItem(USER, JSON.stringify(otherData));
    dispatch(setUserSuccess(otherData));
  }, []);

  return isAuthorized
    ? <Redirect to={{ pathname: ROOT_PATH }}/>
    : (
      <div className={classNames('container', 'main', styles.auth)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Welcome to EZ-clock</h1>
          {LOGIN_FORM_INPUTS.map(({ Component, ...inputProps }, index) =>
            <Component error={errors[inputProps.name]?.message} key={index} ref={register} {...inputProps}/>,
          )}
          <div className={styles.controls}>
            <Link to={FORGOT_PATH}>Forgot password?</Link>
            <button type="submit" className="button primary w100">Login</button>
            <p>Don&apos;t have an account? <Link to={SIGNUP_PATH}>Create account</Link></p>
          </div>
        </form>
        <img src={loginImg} alt="login" />
      </div>
    );
};

export default Login;
