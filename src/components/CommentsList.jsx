import React from 'react';
import CommentItem from './CommentItem';
import { commentShape } from '../customPropType/shape';
import PropTypes from 'prop-types';

function CommentsList({ comments, totalComments, upComment, downComment, userId }) {
  return (
    <div className='thread-comment__list'>
      <h5>Komentar ({totalComments})</h5>
      <div className='comments-list d-flex flex-column gap-2'>
        {
          comments.map((comment) => (
            <CommentItem key={comment.id} {...comment} upComment={upComment} downComment={downComment} userId={userId} />
          ))
        }
      </div>
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  totalComments: PropTypes.number.isRequired,
  upComment: PropTypes.func.isRequired,
  downComment: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

export default CommentsList;
