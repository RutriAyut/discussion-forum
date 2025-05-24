import { describe, expect, it } from 'vitest';
import authUserReducer from './reducer';
/**
 * test scenario for authUserReducer
 *
 * - authUserReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the authUser when given by authUser/set action
 *  - should return the null when given by authUser/unset action
 *
 */

describe('authUser function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOW' };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the authUser when given by set action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'authUser/set',
      payload: {
        authUser: {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return the null when given by unset action', () => {
    // arrange
    const initialState = {
      id: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    };

    const action = {
      type: 'authUser/unset',
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toBeNull();
  });
});
