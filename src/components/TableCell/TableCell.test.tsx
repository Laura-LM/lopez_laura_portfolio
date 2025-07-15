import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

test('TableCell is visible', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell>Cell content</TableCell>
        </tr>
      </tbody>
    </table>
  );
  expect(screen.getByTestId('table-cell')).toBeVisible();
});

test('TableCell has reduced opacity when disabled', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell disabled>Cell content</TableCell>
        </tr>
      </tbody>
    </table>
  );
  expect(screen.getByTestId('table-cell')).toHaveStyle('opacity: 0.6');
});

test('TableCell renders as header when asHeader is true', () => {
  render(
    <table>
      <thead>
        <tr>
          <TableCell asHeader>Header content</TableCell>
        </tr>
      </thead>
    </table>
  );
  const headerCell = screen.getByTestId('table-cell');
  expect(headerCell.tagName).toBe('TH');
});

test('TableCell renders as data cell by default', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell>Cell content</TableCell>
        </tr>
      </tbody>
    </table>
  );
  const cell = screen.getByTestId('table-cell');
  expect(cell.tagName).toBe('TD');
});
