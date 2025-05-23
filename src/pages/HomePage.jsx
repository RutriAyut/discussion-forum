import React, { useEffect, useState } from 'react';
import ThreadsList from '../components/ThreadsList';
import { useDispatch, useSelector } from 'react-redux';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import { useNavigate } from 'react-router-dom';
import { asyncToggleUpVoteThreads, asyncToggleDownVoteThreads, asyncToggleNeutralVoteThreads } from '../states/threads/action';
import CategoriesList from '../components/CategoriesList';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser = null,
  } = useSelector((states) => states);
  const [keyword, setKeyword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authUserId = authUser === null ? null : authUser.id;

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onKeyword = (category) => {
    setKeyword((state) => (state === category ? '' : category));
  };

  const onAddThread = () => {
    navigate('/add');
  };

  const onNeutralVote = (id) => {
    dispatch(asyncToggleNeutralVoteThreads(id));
  };

  const onUpVote = (id, voteType) => {
    voteType === 1 ? dispatch(asyncToggleUpVoteThreads(id)) : onNeutralVote(id);
  };

  const onDownVote = (id, voteType) => {
    voteType === -1 ? dispatch(asyncToggleDownVoteThreads(id)) : onNeutralVote(id);
  };

  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUserId,
  }))
    .filter((thread) => thread.category.includes(keyword));

  const categories = threads
    .map((item) => item.category)
    .filter(
      (category, index, currentCategory) => currentCategory.indexOf(category) === index,
    );

  if (!threadsList) {
    return null;
  }

  return (
    <>
      <section className='home-page'>
        <CategoriesList categories={categories} keyword={keyword} onKeyword={onKeyword} />
        <ThreadsList threads={threadsList} upVote={onUpVote} downVote={onDownVote} />
      </section>
      { authUser &&
      <button className='new-thread-button' onClick={() => onAddThread()}>
        <i className='bi bi-plus-circle-fill'></i>
      </button>
      }
    </>
  );
}

export default HomePage;
