import { ADD_EMPLOYEE } from 'store/actions';
import defaultAvatar from 'assets/images/account.svg';


const INITIAL_STATE = {
  list: [
    {
      id: 1,
      name: 'Justin Septimus',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSt2pARop87Qv446fz09izAIyULncJjgR93Zg&usqp=CAU',
      online: false,
    },
    {
      id: 2,
      name: 'John Doe',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU',
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        list: [
          ...state.list,
          { id: state.list.length + 1, avatar: payload.avatar || defaultAvatar, ...payload },
        ],
      };

    default:
      return state;
  }
};
