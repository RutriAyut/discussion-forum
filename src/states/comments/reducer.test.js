import { describe, expect, it } from 'vitest';
import commentReducer from './reducer';
/**
 * test scenario for commentReducer
 *
 * - commentReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the comment when given by comments/add action
 */

describe('commentReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOW' };

    // action
    const nextState = commentReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the comment when given by comments/add action', () => {
    // arrange
    const initialState = null;

    const action = {
      type: 'comments/add',
      payload: {
        comment: {
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
        },
      },
    };

    // action
    const nextState = commentReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.comment);
  });
});
