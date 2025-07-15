import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Card from './Card';

test('Card is visible', () => {
  render(<Card>This is a card</Card>);
  expect(screen.getByTestId('card')).toBeVisible();
});

test('Card has grey background when disabled', () => {
  render(<Card disabled>This is a card</Card>);
  expect(screen.getByTestId('card')).toHaveStyle('background-color: #d3d3d3');
});