import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import { addCommentActionCenter, asyncAddComment } from './action';
/**
 * skenario test
 *
 * - asyncAddComment thunk
 *  - should dispatch action correctly when add comment success
 *  - should dispatch action and call alert correctly when add comment failed
 */

const fakeCreateCommentResponse = {
  id: 'comment-1',
  content: 'Ini adalah komentar pertama',
  createdAt: '2021-06-21T07:00:00.000Z',
  upVotesBy: [],
  downVotesBy: [],
  owner: {
    id: 'users-1',
    name: 'John Doe',
    email: 'john@example.com',
  },
};

const fakeCommentInput = {
  threadId: 'thread-1',
  content: 'Ini adalah komentar pertama',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncAddComment thunk', () => {
  beforeEach(() => {
    api._createComment = api.createComment;
  });

  afterEach(() => {
    api.createComment = api._createComment;

    delete api._createComment;
  });

  it('should dispatch action correctly when add comment success', async () => {
    // arrange
    // stub implementation
    api.createComment = () => Promise.resolve(fakeCreateCommentResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncAddComment(fakeCommentInput)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(addCommentActionCenter(fakeCreateCommentResponse));
  });

  it('should dispatch action and call alert correctly when login failed', async () => {
    // arrange
    // stub implementation
    api.createComment = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncAddComment(fakeCommentInput)(dispatch);

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
