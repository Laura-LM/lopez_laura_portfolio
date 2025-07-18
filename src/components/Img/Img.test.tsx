import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

test('Img is visible', () => {
  render(<Img src="test.jpg" alt="test" />);
  expect(screen.getByTestId('img')).toBeVisible();
});

test('Img has reduced opacity when disabled', () => {
  render(<Img src="test.jpg" alt="test" disabled />);
  expect(screen.getByTestId('img')).toHaveStyle('opacity: 0.6');
});
