import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import { asyncReciveThreadDetail, asyncToggleDownVoteComment, asyncToggleDownVoteThread, asyncToggleNeutralVoteComment, asyncToggleNeutralVoteThread, asyncToggleUpVoteComment, asyncToggleUpVoteThread } from '../states/threadDetail/action';
import { asyncAddComment } from '../states/comments/action';
import { toast } from 'react-toastify';

function DetailPage() {
  const { id } = useParams();
  const {
    threadDetail = null,
    authUser = null,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const authUserId = authUser === null ? null : authUser.id;

  useEffect(() => {
    dispatch(asyncReciveThreadDetail(id));
  }, [id, dispatch]);

  const onNeutralVote = (id) => {
    dispatch(asyncToggleNeutralVoteThread(id));
  };

  const onUpVote = (id, voteType) => {
    voteType === 1 ? dispatch(asyncToggleUpVoteThread(id)) : onNeutralVote(id);
  };

  const onDownVote = (id, voteType) => {
    voteType === -1 ? dispatch(asyncToggleDownVoteThread(id)) : onNeutralVote(id);
  };

  const onAddComment = ({ id, content }) => {
    dispatch(asyncAddComment({ threadId: id, content }));
    toast.success('Comment Berhasil dibuat');
    dispatch(asyncReciveThreadDetail(id));
  };

  const onNeutralVoteComment = (commentId) => {
    dispatch(asyncToggleNeutralVoteComment({ threadId: id, commentId }));
  };

  const onUpVoteComment = (commentId, voteType) => {
    voteType === 1 ? dispatch(asyncToggleUpVoteComment({ threadId: id, commentId })) : onNeutralVoteComment(commentId);
  };

  const onDownVoteComment = (commentId, voteType) => {
    voteType === -1 ? dispatch(asyncToggleDownVoteComment({ threadId: id, commentId })) : onNeutralVoteComment(commentId);
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className='detail-page'>
      <ThreadDetail
        {...threadDetail}
        upVote={onUpVote}
        downVote={onDownVote}
        authUser={authUserId}
        addComment={onAddComment}
        upComment={onUpVoteComment}
        downComment={onDownVoteComment}
      />
    </section>
  );
}

export default DetailPage;
