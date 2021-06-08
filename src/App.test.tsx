import React from 'react';
import {getByTestId, render, screen, within} from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders a board', () => {
    render(<App />);

    const board = screen.getByTestId('board');

    expect(board).toBeInTheDocument();
  });


  test('renders 64 squars inside the board', () => {
    render(<App />);

    const board = screen.getByTestId('board')

    const squares = within(board).getAllByTestId('square')

    expect(squares).toHaveLength(64);
  });
})
