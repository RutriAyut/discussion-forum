import api from '../../utils/api';

const ActionType = {
  RECIVE_THREADS: 'threads/recive',
  ADD_THREADS: 'threads/add',
  UP_VOTE_THREADS: 'threads/upVote',
  DOWN_VOTE_THREADS: 'threads/downVote',
  NEUTRAL_VOTE_THREADS: 'threads/neutralVote',
};

function reciveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREADS,
    payload: {
      thread,
    },
  };
}

function toggleUpVotethreadsActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREADS,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownVotethreadsActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREADS,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralVotethreadsActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREADS,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, category, body }) {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleUpVoteThreads(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleUpVotethreadsActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVotethreadsActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleDownVoteThreads(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDownVotethreadsActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVotethreadsActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleNeutralVoteThreads(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralVotethreadsActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.neutralizeVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralVotethreadsActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  reciveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  toggleUpVotethreadsActionCreator,
  toggleDownVotethreadsActionCreator,
  toggleNeutralVotethreadsActionCreator,
  asyncToggleUpVoteThreads,
  asyncToggleDownVoteThreads,
  asyncToggleNeutralVoteThreads,
};
