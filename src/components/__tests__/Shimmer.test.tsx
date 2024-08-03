import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Shimmer} from '@/components';

describe('Shimmer Component', () => {
  test('renders with the default number of rows', () => {
    render(<Shimmer />);
    const shimmerElements = screen.getAllByTestId('shimmer');
    expect(shimmerElements).toHaveLength(1);
  });
});