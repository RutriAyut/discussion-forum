import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import CommentInput from './CommentInput';

/**
 * test scenario
 *
 * - CommentInput component
 *   - should handle comment typing correctly
 *   - should call addComment function when Kirim button is clicked
 */

expect.extend(matchers);

describe('CommentInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle comment typing correctly', async () => {
    // Arrange
    render(<CommentInput addComment={() => {}} id='thread-1' />);
    const commentInput = await screen.getByTitle('comment-content');

    // Action
    await userEvent.type(commentInput, 'This is the first comment');

    // Assert
    expect(commentInput).toHaveTextContent('This is the first comment');
  });

  it('should call addComment function when Kirim button is clicked', async () => {
    // Arrange
    const mockAddComment = vi.fn();
    render(<CommentInput addComment={mockAddComment} id='thread-1' />);
    const commentInput = await screen.getByTitle('comment-content');
    await userEvent.type(commentInput, 'This is the first comment');
    const kirimButton = await screen.getByRole('button', { name: 'Kirim' });

    // Action
    await userEvent.click(kirimButton);

    // Assert
    expect(mockAddComment).toBeCalledWith({
      id: 'thread-1',
      content: 'This is the first comment',
    });
  });
});
