import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../UI/SearchBar';

describe('SearchBar Component', () => {
  test('renders with the correct initial query', () => {
    render(<SearchBar query="initial query" onSearch={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Search...');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('initial query');
  });

  test('calls onSearch with the correct value when typed into', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar query="" onSearch={mockOnSearch} />);
    const inputElement = screen.getByPlaceholderText('Search...');

    fireEvent.change(inputElement, { target: { value: 'new query' } });
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('new query');
  });

  test('updates input value when prop changes', () => {
    const { rerender } = render(<SearchBar query="initial query" onSearch={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Search...');

    expect(inputElement).toHaveValue('initial query');

    rerender(<SearchBar query="updated query" onSearch={() => {}} />);
    expect(inputElement).toHaveValue('updated query');
  });
});