import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Button from './Button';

test('Button is visible', () => {
  render(<Button>Test</Button>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Button has grey background when disabled', () => {
  render(<Button disabled>Test</Button>);
  expect(screen.getByText('Test')).toHaveStyle('background-color: #d3d3d3');
});
