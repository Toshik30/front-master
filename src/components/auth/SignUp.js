import { USER } from 'variables';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import signUpImg from 'assets/images/signUp.svg';
import signUpFormImg from 'assets/images/signUpForm.svg';
import { SIGNUP_FORM_INPUTS, signUpSchema } from 'components/auth/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { setUserSuccess } from 'store/actions';
import { getIsAuthorized } from 'store/selectors';
import { Redirect } from 'react-router-dom';
import { ROOT_PATH } from 'routes/routePaths';
import styles from './auth.module.scss';


const SignUp = () => {
  const [isFormShowed, setIsFormShowed] = useState(false);
  const isAuthorized = useSelector(getIsAuthorized);
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(signUpSchema),
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
        {isFormShowed
          ? <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Creating account</h1>
            {SIGNUP_FORM_INPUTS.map(({ Component, ...inputProps }, index) =>
              <Component error={errors[inputProps.name]?.message} key={index} ref={register} {...inputProps}/>,
            )}
            <button type="submit" className="button primary w100">Create</button>
          </form>
          : <div className={styles.description}>
            <h1>Creating account</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua.</p>
            <button className="button primary w100" onClick={() => setIsFormShowed(true)}>Sign Up</button>
          </div>}
        <img src={isFormShowed ? signUpFormImg : signUpImg} alt="signUp" />
      </div>
    );
};

export default SignUp;
