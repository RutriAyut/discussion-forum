import React from 'react';
import CategoryItem from './CategoryItem';
import ThreadFooter from './ThreadFooter';
import { threadItemShape } from '../customPropType/shape';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import textLimiter from '../utils/textLimiter';

function ThreadItem({ id, title, body, category, createdAt, ownerId, user, upVotesBy, downVotesBy, totalComments, upVote, downVote, authUser }) {
  const threadFooter = ({
    ...user,
    upVotesBy,
    downVotesBy,
    totalComments,
    createdAt,
    threadId: id,
    authUser,
  });

  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/thread/${id}`);
    }
  };

  return (
    <div className='thread-item' role='button' onClick={onThreadClick} onKeyDown={onThreadPress}>
      <header className='thread-item__header'>
        <CategoryItem category={category}/>
        <h5>{title}</h5>
      </header>
      <div className='thread-item__body'>
        {parse(textLimiter(body))}
      </div>
      <ThreadFooter {...threadFooter} upVote={upVote} downVote={downVote} />
    </div>
  );
}

ThreadItem.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default ThreadItem;
