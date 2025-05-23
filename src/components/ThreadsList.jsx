import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadItemShape } from '../customPropType/shape';

function ThreadsList({ threads, upVote, downVote }) {
  return (
    <div className='threads-list'>
      <h2>Diskusi Tersedia</h2>
      {
        threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} upVote={upVote} downVote={downVote} />
        ))
      }
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default ThreadsList;
