import { describe, expect, it } from 'vitest';
import threadDetailReducer from './reducer';
/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the detailThread when given by threadDetail/recive action
 *  - should return null when given by threadDetail/clear action
 *  - should return the detailThread with the toggled upVote when given by threadDetail/upVote action
 *  - should return the detailThread with the toggled downVote when given by threadDetail/downVote action
 *  - should return the detailThread with the toggled neutralVote when given by threadDetail/neutralVote action
 *  - should return the detailThread with the toggled upVote comment when given by threadDetail/commentUpVote action
 *  - should return the detailThread with the toggled downVote comment when given by threadDetail/commentDownVote action
 *  - should return the detailThread with the toggled neutralVote comment when given by threadDetail/commentNeutralVote action
 *
 */

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOW' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the detailThread when given by threadDetail/recive action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'threadDetail/recive',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return the null when given by threadDetail/clear action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };

    const action = {
      type: 'threadDetail/clear',
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toBeNull();
  });

  it('should return the detailThread with the toggled upVote when given by threadDetail/upVote action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };
    const action = {
      type: 'threadDetail/upVote',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // action: upvote
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
      downVotesBy: [],
    });

    // action: unupvote
    const nextState2 = threadDetailReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });

  it('should return the detailThread with the toggled downVote when given by threadDetail/downVote action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [],
    };
    const action = {
      type: 'threadDetail/downVote',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // action: downvote
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [action.payload.userId],
    });

    // action: undownvote
    const nextState2 = threadDetailReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });

  it('should return the detailThread with the toggled neutralVote when given by threadDetail/neutralVote action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: ['users-1'],
      downVotesBy: [],
      comments: [],
    };
    const action = {
      type: 'threadDetail/neutralVote',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: [],
    });
  });

  it('should return the detailThread with the toggled upVote comment when given by threadDetail/commentUpVote action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'threadDetail/commentUpVote',
      payload: {
        threadId: 'thread-1',
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };

    // action: upvote
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [{
        ...initialState.comments[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      }],
    });

    // action: unupvote
    const nextState2 = threadDetailReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });

  it('should return the detailThread with the toggled downVote comment when given by threadDetail/commentDownVote action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'threadDetail/commentDownVote',
      payload: {
        threadId: 'thread-1',
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };

    // action: downvote
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [{
        ...initialState.comments[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      }],
    });

    // action: undownvote
    const nextState2 = threadDetailReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });

  it('should return the detailThread with the toggled neutralVote comment when given by threadDetail/commentNeutralVote action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: ['users-1'],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: 'threadDetail/commentNeutralVote',
      payload: {
        threadId: 'thread-1',
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [{
        ...initialState.comments[0],
        upVotesBy: [],
        downVotesBy: [],
      }],
    });
  });
});
