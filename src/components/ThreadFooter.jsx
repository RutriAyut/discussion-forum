import React from 'react';
import PropTypes from 'prop-types';
import postedAt from '../utils/postedAt';
import { ownerShape } from '../customPropType/shape';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faThumbsDown, faThumbsUp } from '@fortawesome/fontawesome-free-solid';
import { faThumbsUp as faTumbsUpRegular, faThumbsDown as faTumbsDownRegular } from '@fortawesome/fontawesome-free-regular';
import { toast } from 'react-toastify';

function ThreadFooter({ threadId, id, name, avatar, upVotesBy, downVotesBy, totalComments, createdAt, upVote, downVote, authUser }) {
  const isThreadUpVoted = upVotesBy.includes(authUser);
  const isThreadDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    if (authUser) {
      const voteType = isThreadUpVoted ? 0 : 1;
      upVote(threadId, voteType);
    } else {
      toast.error('Please Login First');
    }
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    if (authUser) {
      const voteType = isThreadDownVoted ? 0 : -1;
      downVote(threadId, voteType);
    } else {
      toast.error('Please Login First');
    }
  };

  return (
    <footer className='thread-item__footer flex-column flex-md-row'>
      <div className='thread-item__action d-flex gap-2'>
        {
          upVote && (
            <div>
              <button type='button' className='tumbs' aria-label='upVote' onClick={onUpVoteClick}>
                <FontAwesomeIcon icon={isThreadUpVoted ? faThumbsUp : faTumbsUpRegular} ></FontAwesomeIcon>
              </button>
              {' '}
              {upVotesBy.length}
            </div>
          )
        }
        {
          downVote && (
            <div>
              <button type='button' className='tumbs' aria-label='downVote' onClick={onDownVoteClick}>
                <FontAwesomeIcon icon={ isThreadDownVoted ? faThumbsDown : faTumbsDownRegular } ></FontAwesomeIcon>
              </button>
              {' '}
              {downVotesBy.length}
            </div>
          )
        }
        <div>
          <button type='button' className='tumbs'>
            <FontAwesomeIcon icon={faReply} ></FontAwesomeIcon>
          </button>
          {' '}
          {totalComments}
        </div>
      </div>
      <p>dipost {postedAt(createdAt)}</p>
      <div className='owner-info d-flex gap-2'>
        <p>oleh</p>
        <img src={avatar} />
        <p>
          <strong>{name}</strong>
        </p>
      </div>
    </footer>
  );
}

ThreadFooter.propTypes = {
  ...ownerShape,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  threadId: PropTypes.string.isRequired,
};

export default ThreadFooter;
