import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import { addThreadActionCreator, asyncAddThread } from './action';

/**
 * skenario test
 *
 * - asyncAddThread thunk
 *  - should dispatch action correctly when add thread success
 *  - should dispatch action and call alert correctly when add thread failed
 */

const fakeThreadInput = {
  title: 'Thread Kedua',
  body: 'Ini adalah thread kedua',
  category: 'General',
};

const fakeThreadResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncAddThread thunk', () => {
  beforeEach(() => {
    api._createThread = api.createThread;
  });

  afterEach(() => {
    api.createThread = api._createThread;

    delete api._createThread;
  });

  it('should dispatch action correctly when add thread success', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.resolve(fakeThreadResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncAddThread(fakeThreadInput)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(fakeThreadResponse));
  });

  it('should dispatch action and call alert correctly when add thread failed', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncAddThread(fakeThreadInput)(dispatch);

    // assert
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
