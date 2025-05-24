import { describe, expect, it } from 'vitest';
import isPreloadReducer from './reducer';
/**
 * test scenario for isPreloadReducer
 *
 * - isPreloadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the isPreload when given by isPreload/set action
 */

describe('isPreloadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOW' };

    // action
    const nextState = isPreloadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return isPreload when given by isPreload/set action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'isPreload/set',
      payload: {
        isPreload: false,
      },
    };

    // action
    const nextState = isPreloadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.isPreload);
  });
});
