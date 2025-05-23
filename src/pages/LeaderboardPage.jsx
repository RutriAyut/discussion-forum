import React, { useEffect } from 'react';
import LeaderboardsList from '../components/LeaderboardsList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReciveLeaderboards } from '../states/leaderboards/action';

function LeaderboardPage() {
  const {
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReciveLeaderboards());
  }, [dispatch]);

  if (!leaderboards) {
    return null;
  }

  return (
    <div className='leaderboard-page'>
      <h2 className='mb-3'>Klasmen Pengguna Aktif</h2>
      <LeaderboardsList leaderboards={leaderboards} />
    </div>
  );
}

export default LeaderboardPage;
