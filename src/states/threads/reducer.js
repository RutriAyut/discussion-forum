import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
  case ActionType.RECIVE_THREADS:
    return action.payload.threads;
  case ActionType.ADD_THREADS:
    return [action.payload.thread, ...threads];
  case ActionType.UP_VOTE_THREADS:
    return threads.map((thread) => {
      if (thread.id === action.payload.threadId) {
        return {
          ...thread,
          upVotesBy: thread.upVotesBy.includes(action.payload.userId)
            ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
            : thread.upVotesBy.concat([action.payload.userId]),
          downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
        };
      }
      return thread;
    });
  case ActionType.DOWN_VOTE_THREADS:
    return threads.map((thread) => {
      if (thread.id === action.payload.threadId) {
        return {
          ...thread,
          upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
          downVotesBy: thread.downVotesBy.includes(action.payload.userId)
            ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
            : thread.downVotesBy.concat([action.payload.userId]),
        };
      }
      return thread;
    });
  case ActionType.NEUTRAL_VOTE_THREADS:
    return threads.map((thread) => {
      if (thread.id === action.payload.threadId) {
        return {
          ...thread,
          upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
          downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
        };
      }
      return thread;
    });
  default:
    return threads;
  }
}

export default threadsReducer;
