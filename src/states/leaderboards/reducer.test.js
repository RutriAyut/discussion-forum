import { describe, expect, it } from 'vitest';
import leaderboardsReducer from './reducer';
/**
 * test scenario for leaderboardsReducer
 *
 * - leaderboardsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the leaderboards when given by leaderboards/recive action
 */

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOW' };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboards when given by leaderboards/recive action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'leaderboards/recive',
      payload: {
        leaderboards: [
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
        ],
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
