import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

test('Dropdown is visible', () => {
  render(<Dropdown options={options} value="1" />);
  expect(screen.getByTestId('dropdown')).toBeVisible();
});

test('Dropdown has grey background when disabled', () => {
  render(<Dropdown options={options} value="1" disabled />);
  expect(screen.getByTestId('dropdown')).toHaveStyle(
    'background-color: #d3d3d3'
  );
});
