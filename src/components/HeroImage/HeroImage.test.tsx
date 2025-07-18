import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('HeroImage is visible', () => {
  render(<HeroImage src="test.jpg" alt="test" />);
  expect(screen.getByTestId('hero-image')).toBeVisible();
});

test('HeroImage has reduced opacity when disabled', () => {
  render(<HeroImage src="test.jpg" alt="test" disabled />);
  expect(screen.getByTestId('hero-image')).toHaveStyle('opacity: 0.6');
});
