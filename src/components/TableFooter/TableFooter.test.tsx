import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

test('TableFooter is visible', () => {
  render(
    <table>
      <TableFooter>
        <tr>
          <td>Footer content</td>
        </tr>
      </TableFooter>
    </table>
  );
  expect(screen.getByTestId('table-footer')).toBeVisible();
});

test('TableFooter has reduced opacity when disabled', () => {
  render(
    <table>
      <TableFooter disabled>
        <tr>
          <td>Footer content</td>
        </tr>
      </TableFooter>
    </table>
  );
  expect(screen.getByTestId('table-footer')).toHaveStyle('opacity: 0.6');
});
