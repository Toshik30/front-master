import { get } from 'lodash';

export const getUser = (state) => get(state, 'user');

export const getIsAuthorized = (state) => get(state, 'user.isAuthorized');

export const getActiveModal = (state) => get(state, 'user.activeModal');
