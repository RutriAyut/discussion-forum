import { describe, expect, it } from 'vitest';
import usersReducer from './reducer';
/**
 * test scenario for usersReducer
 *
 * - usersReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by users/recive action
 */

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOW' };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return users when given by users/recive action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'users/recive',
      payload: {
        users: [
          {
            id: 'john_doe',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'jane_doe',
            name: 'Jane Doe',
            email: 'jane@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'fulan',
            name: 'Si Fulan',
            email: 'fulan@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
        ],
      },
    };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.users);
  });
});
