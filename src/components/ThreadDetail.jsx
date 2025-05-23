import React from 'react';
import parse from 'html-react-parser';
import CategoryItem from './CategoryItem';
import ThreadFooter from './ThreadFooter';
import PropTypes from 'prop-types';
import { detailThread } from '../customPropType/shape';
import CommentsList from './CommentsList';
import CommentInput from './CommentInput';

function ThreadDetail({ id, title, body, category, createdAt, upVotesBy, downVotesBy, owner, comments, upVote, downVote, authUser, addComment, upComment, downComment }) {
  const totalComments = comments.length;
  const threadFooter = ({
    ...owner,
    upVotesBy,
    downVotesBy,
    totalComments,
    createdAt,
    threadId: id,
    authUser,
  });

  return (
    <div className='thread-detail'>
      <header className='thread-header'>
        <CategoryItem category={category} disabled />
      </header>
      <div className='thread-content mb-2'>
        <h3>{title}</h3>
        <div>{parse(body)}</div>
      </div>
      <ThreadFooter {...threadFooter} upVote={upVote} downVote={downVote} />
      <div className='thread-comment'>
        {authUser && <CommentInput addComment={addComment} id={id} /> }
        <CommentsList comments={comments} totalComments={totalComments} upComment={upComment} downComment={downComment} userId={authUser} />
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  ...detailThread,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  authUser: PropTypes.string,
  addComment: PropTypes.func.isRequired,
  upComment: PropTypes.func.isRequired,
  downComment: PropTypes.func.isRequired,
};

export default ThreadDetail;
