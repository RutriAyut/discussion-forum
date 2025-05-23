import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECIVE_THREAD_DETAIL: 'threadDetail/recive',
  CLEAR_THREAD_DETAIL: 'threadDetail/clear',
  UP_VOTE_THREAD: 'threadDetail/upVote',
  DOWN_VOTE_THREAD: 'threadDetail/downVote',
  NEUTRAL_VOTE_THREAD: 'threadDetail/neutralVote',
  UP_VOTE_COMMENT: 'threadDetail/commentUpVote',
  DOWN_VOTE_COMMENT: 'threadDetail/commentDownVote',
  NEUTRAL_VOTE_COMMENT: 'threadDetail/commentNeutralVote',
};

function reciveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVotethreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownVotethreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralVotethreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleUpVoteCommentActionCenter({ threadId, commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId,
    },
  };
}

function toggleDownVoteCommentActionCenter({ threadId, commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId,
    },
  };
}

function toggleNeutralVoteCommentActionCenter({ threadId, commentId, userId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId,
    },
  };
}

function asyncReciveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(reciveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
      return;
    } finally {
      dispatch(hideLoading());
    }
  };
}

function asyncToggleUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleUpVotethreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVotethreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDownVotethreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVotethreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleNeutralVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralVotethreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.neutralizeVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralVotethreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleUpVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleUpVoteCommentActionCenter({ threadId, commentId, userId: authUser.id }));

    try {
      await api.upVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVoteCommentActionCenter({ threadId, commentId, userId: authUser.id }));
    }
  };
}

function asyncToggleDownVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDownVoteCommentActionCenter({ threadId, commentId, userId: authUser.id }));

    try {
      await api.downVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteCommentActionCenter({ threadId, commentId, userId: authUser.id }));
    }
  };
}

function asyncToggleNeutralVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralVoteCommentActionCenter({ threadId, commentId, userId: authUser.id }));

    try {
      await api.neutralizeVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralVoteCommentActionCenter({ threadId, commentId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  reciveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpVotethreadActionCreator,
  toggleNeutralVotethreadActionCreator,
  toggleDownVotethreadActionCreator,
  toggleUpVoteCommentActionCenter,
  toggleDownVoteCommentActionCenter,
  toggleNeutralVoteCommentActionCenter,
  asyncReciveThreadDetail,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
  asyncToggleNeutralVoteThread,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
  asyncToggleNeutralVoteComment,
};
