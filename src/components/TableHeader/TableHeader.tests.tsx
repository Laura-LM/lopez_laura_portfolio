import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

test('TableHeader is visible', () => {
  render(
    <table>
      <TableHeader>
        <tr>
          <th>Header</th>
        </tr>
      </TableHeader>
    </table>
  );
  expect(screen.getByTestId('table-header')).toBeVisible();
});

test('TableHeader has reduced opacity when disabled', () => {
  render(
    <table>
      <TableHeader disabled>
        <tr>
          <th>Header</th>
        </tr>
      </TableHeader>
    </table>
  );
  expect(screen.getByTestId('table-header')).toHaveStyle('opacity: 0.6');
});
