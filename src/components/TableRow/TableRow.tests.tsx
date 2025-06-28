import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

test('TableRow is visible', () => {
  render(
    <table>
      <tbody>
        <TableRow>
          <td>Row content</td>
        </TableRow>
      </tbody>
    </table>
  );
  expect(screen.getByTestId('table-row')).toBeVisible();
});

test('TableRow has reduced opacity when disabled', () => {
  render(
    <table>
      <tbody>
        <TableRow disabled>
          <td>Row content</td>
        </TableRow>
      </tbody>
    </table>
  );
  expect(screen.getByTestId('table-row')).toHaveStyle('opacity: 0.6');
});
