import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadInput from './ThreadInput';

/**
 * test scenario
 *
 * - ThreadInput component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle body typing correctly
 *   - should call addThread function when Mulai Diskusi button is clicked
 */

expect.extend(matchers);

describe('ThreadInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Judul');

    // Action
    await userEvent.type(titleInput, 'titletest');

    // Assert
    expect(titleInput).toHaveValue('titletest');
  });

  it('should handle Category typing correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Kategori');

    // Action
    await userEvent.type(categoryInput, 'categorytest');

    // Assert
    expect(categoryInput).toHaveValue('categorytest');
  });

  it('should handle Body typing correctly', async () => {
    // Arrange
    render(<ThreadInput addThread={() => {}} />);
    const bodyInput = await screen.getByTitle('body-thread');

    // Action
    await userEvent.type(bodyInput, 'This is the Thread');

    // Assert
    expect(bodyInput).toHaveTextContent('This is the Thread');
  });

  it('should call addComment function when Kirim button is clicked', async () => {
    // Arrange
    const mockAddThread = vi.fn();
    render(<ThreadInput addThread={mockAddThread} />);
    const titleInput = await screen.getByPlaceholderText('Judul');
    await userEvent.type(titleInput, 'titletest');
    const categoryInput = await screen.getByPlaceholderText('Kategori');
    await userEvent.type(categoryInput, 'categorytest');
    const threadInput = await screen.getByTitle('body-thread');
    await userEvent.type(threadInput, 'This is the thread');
    const submitButton = await screen.getByRole('button', { name: 'Mulai Diskusi' });

    // Action
    await userEvent.click(submitButton);

    // Assert
    expect(mockAddThread).toBeCalledWith({
      title: 'titletest',
      category: 'categorytest',
      body: 'This is the thread',
    });
  });
});
