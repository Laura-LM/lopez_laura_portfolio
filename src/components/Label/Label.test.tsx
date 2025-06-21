import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('Label is visible', () => {
  render(<Label>Test Label</Label>);
  expect(screen.getByTestId('label')).toBeVisible();
});

test('Label has grey color when disabled', () => {
  render(<Label disabled>Test Label</Label>);
  expect(screen.getByTestId('label')).toHaveStyle('color: #a0a0a0');
});