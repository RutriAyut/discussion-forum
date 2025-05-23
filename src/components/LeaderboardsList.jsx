import React from 'react';
import LeaderboardItem from './LeaderboardItem';
import PropTypes from 'prop-types';
import { leaderboardsShape } from '../customPropType/shape';

function LeaderboardsList({ leaderboards }) {
  return (
    <div className='leaderboards-list'>
      <header>
        <strong className='row'>
          <p className='col'>Pengguna</p>
          <p className='col'>Skor</p>
        </strong>
      </header>
      {
        leaderboards.map((leaderboard) => (
          <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
        ))
      }
    </div>
  );
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardsShape)),
};

export default LeaderboardsList;
