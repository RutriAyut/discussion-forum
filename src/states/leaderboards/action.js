import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECIVE_LEADERBOARDS: 'leaderboards/recive',
};

function reciveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncReciveLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const leaderboards = await api.getLeaderboards();

      dispatch(reciveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  reciveLeaderboardsActionCreator,
  asyncReciveLeaderboards,
};
