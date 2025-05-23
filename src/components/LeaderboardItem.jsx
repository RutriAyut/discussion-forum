import React from 'react';
import { leaderboardsShape } from '../customPropType/shape';

function LeaderboardItem({ user, score }) {
  return (
    <div className='leaderboard-item row'>
      <div className='col leaderboard-item__user'>
        <div className='owner-info'><img src={user.avatar} /></div>
        <p>{user.name}</p>
      </div>
      <p className='col'>{score}</p>
    </div>
  );
}

LeaderboardItem.propTypes = {
  ...leaderboardsShape,
};

export default LeaderboardItem;
