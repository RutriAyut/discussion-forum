import { ActionType } from './action';

function leaderboardsReducer(leaderboards = [], action = {}) {
  switch (action.type) {
  case ActionType.RECIVE_LEADERBOARDS:
    return action.payload.leaderboards;
  default:
    return leaderboards;
  }
}

export default leaderboardsReducer;
