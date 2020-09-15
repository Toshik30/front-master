import { LOGOUT_USER, SET_USER_SUCCESS, TOGGLE_SHOW_MODAL } from 'store/actions';
import { USER } from 'variables';


const INITIAL_STATE = {
  user: {},
  isAuthorized: false,
  isLoading: true,
  activeModal: {},
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_SUCCESS:
      return { ...state, user: payload, isAuthorized: true, isLoading: false };

    case LOGOUT_USER:
      localStorage.removeItem(USER);

      return { ...state, user: {}, isAuthorized: false };

    case TOGGLE_SHOW_MODAL:
      return { ...state, activeModal: payload };

    default:
      return state;
  }
};
