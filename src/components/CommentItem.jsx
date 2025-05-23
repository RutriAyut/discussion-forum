import React from 'react';
import { commentShape } from '../customPropType/shape';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/fontawesome-free-solid';
import { faThumbsUp as faTumbsUpRegular, faThumbsDown as faTumbsDownRegular } from '@fortawesome/fontawesome-free-regular';
import postedAt from '../utils/postedAt';

function CommentItem({ id, content, createdAt, owner, upVotesBy, downVotesBy, userId, upComment, downComment }) {
  const isCommentUpVoted = upVotesBy.includes(userId);
  const isCommentDownVoted = downVotesBy.includes(userId);

  const onUpCommentClick = (event) => {
    event.stopPropagation();
    if (userId) {
      const voteType = isCommentUpVoted ? 0 : 1;
      upComment(id, voteType);
    } else {
      toast.error('Please Login First');
    }
  };

  const onDownCommentClick = (event) => {
    event.stopPropagation();
    if (userId) {
      const voteType = isCommentDownVoted ? 0 : -1;
      downComment(id, voteType);
    } else {
      toast.error('Please Login First');
    }
  };

  return (
    <div className='comment-item row border-bottom pb-2'>
      <div className='owner-info align-items-center col-auto'>
        <img src={owner.avatar} />
      </div>
      <div className='col d-flex flex-column'>
        <h6 >{owner.name}</h6>
        <p className='comment-date mb-1'>{postedAt(createdAt)}</p>
        <p className='comment-body mb-1'>{parse(content)}</p>

        <footer className='comment-item__footer'>
          {
            upComment && (
              <div>
                <button type='button' className='tumbs' aria-label='upVote' onClick={onUpCommentClick}>
                  <FontAwesomeIcon icon={isCommentUpVoted ? faThumbsUp : faTumbsUpRegular} ></FontAwesomeIcon>
                </button>
                {' '}
                {upVotesBy.length}
              </div>
            )
          }
          {
            downComment && (
              <div>
                <button type='button' className='tumbs' aria-label='downVote' onClick={onDownCommentClick}>
                  <FontAwesomeIcon icon={ isCommentDownVoted ? faThumbsDown : faTumbsDownRegular } ></FontAwesomeIcon>
                </button>
                {' '}
                {downVotesBy.length}
              </div>
            )
          }
        </footer></div>
    </div>
  );
}

CommentItem.propTypes = {
  ...commentShape,
  upComment: PropTypes.func.isRequired,
  downComment: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

export default CommentItem;
