import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { reciveThreadsActionCreator } from '../threads/action';
import { reciveUsersActionCreator } from '../users/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(reciveUsersActionCreator(users));
      dispatch(reciveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export default asyncPopulateUsersAndThreads;
