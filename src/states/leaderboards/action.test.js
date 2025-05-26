import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { asyncReciveLeaderboards, reciveLeaderboardsActionCreator } from './action';

/**
 * skenario test
 *
 * - asyncReciveLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

const fakeGetLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReciveLeaderboards thunk', () => {
  beforeEach(() => {
    api._getLeaderboards = api.getLeaderboards;
  });

  afterEach(() => {
    api.getLeaderboards = api._getLeaderboards;

    delete api._getLeaderboards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getLeaderboards = () => Promise.resolve(fakeGetLeaderboardsResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncReciveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(reciveLeaderboardsActionCreator(fakeGetLeaderboardsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncReciveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
