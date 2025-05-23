import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECIVE_USERS: 'users/recive',
};

function reciveUsersActionCreator(users) {
  return {
    type: ActionType.RECIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUsers({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ name, email, password });
      return 'success';
    } catch (error) {
      alert(error.message);
      return 'error';
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  reciveUsersActionCreator,
  asyncRegisterUsers,
};
