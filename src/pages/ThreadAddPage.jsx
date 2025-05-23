import React from 'react';
import ThreadInput from '../components/ThreadInput';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../states/threads/action';
import { toast } from 'react-toastify';
import asyncPopulateUsersAndThreads from '../states/shared/action';

function ThreadAddPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));
    dispatch(asyncPopulateUsersAndThreads());
    toast.success('Thread Berhasil dibuat');
    navigate('/');
  };

  return (
    <div className='new-thread-page'>
      <h2 className='mb-4'>Buat Diskusi Baru</h2>
      <ThreadInput addThread={onAddThread} />
    </div>
  );
}

export default ThreadAddPage;
