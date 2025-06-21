import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('Text is visible', () => {
  render(<Text>Test Text</Text>);
  expect(screen.getByTestId('text')).toBeVisible();
});

test('Text has grey color when disabled', () => {
  render(<Text disabled>Test Text</Text>);
  expect(screen.getByTestId('text')).toHaveStyle('color: #a0a0a0');
});