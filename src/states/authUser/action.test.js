import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import { asyncSetAuthUser, setAuthUserActionCreator } from './action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
/**
 * skenario test
 *
 * - asyncSetAuthUser thunk
 *  - should dispatch action correctly when login success
 *  - should dispatch action and call alert correctly when login failed
 */

const fakeLoginResponse = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRpbWFzMiIsIm5hbWUiOiJEaW1hcyBTYXB1dHJhIiwicGhvdG8iOiJodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8_bmFtZT1EaW1hcyBTYXB1dHJhJmJhY2tncm91bmQ9cmFuZG9tIiwiaXNfcGVybWFuZW50IjpmYWxzZSwiaWF0IjoxNjYzODQwNzY0fQ._HrzpinFYX_m9WfvM-lGCdVrnhnaGHhzt1e6eATE1Iw',
};

const fakeGetOwnProfileResponse = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeLoginInput = {
  email: 'john@example.com',
  password: 'JohnDoe',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => {
    api._login = api.login;
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.login = api._login;
    api.getOwnProfile = api._getOwnProfile;

    delete api._login;
    delete api._getOwnProfile;
  });

  it('should dispatch action correctly when login success', async () => {
    // arrange
    // stub implementation
    api.login = () => Promise.resolve(fakeLoginResponse);
    api.getOwnProfile = () => Promise.resolve(fakeGetOwnProfileResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncSetAuthUser(fakeLoginInput)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeGetOwnProfileResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when login failed', async () => {
    // arrange
    // stub implementation
    api.login = () => Promise.reject(fakeErrorResponse);
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncSetAuthUser(fakeLoginInput)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
