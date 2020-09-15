import { USER } from 'variables';


export const SET_USER_SUCCESS = 'SET_USER_SUCCESS';
export const setUserSuccess = (payload) => ({ type: SET_USER_SUCCESS, payload });

export const SET_USER_ERROR = 'SET_USER_ERROR';
export const setUserError = (payload) => ({ type: SET_USER_ERROR, payload });

export const GET_USER = 'GET_USER';
export const getUser = (dispatch) => {
  const user = localStorage.getItem(USER);

  if (user) {
    return dispatch(setUserSuccess(user));
  }

  return dispatch(setUserError({ error: 'Something went wrong' }));
};

// export const LOGIN_USER = 'LOGIN_USER';

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () => ({ type: LOGOUT_USER });

export const TOGGLE_SHOW_MODAL = 'TOGGLE_SHOW_MODAL';
export const toggleShowModal = (payload) => ({ type: TOGGLE_SHOW_MODAL, payload });
