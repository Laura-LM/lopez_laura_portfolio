import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

test('RadioButton is visible', () => {
  render(<RadioButton label="Test Radio" />);
  expect(screen.getByText('Test Radio')).toBeVisible();
});

test('RadioButton is disabled when prop is set', () => {
  render(<RadioButton label="Disabled Radio" disabled />);
  expect(screen.getByTestId('radio-input')).toBeDisabled();
});