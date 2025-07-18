import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

test('Table is visible', () => {
  render(
    <Table>
      <tbody>
        <tr>
          <td>Test</td>
        </tr>
      </tbody>
    </Table>
  );
  expect(screen.getByTestId('table')).toBeVisible();
});

test('Table has reduced opacity when disabled', () => {
  render(
    <Table disabled>
      <tbody>
        <tr>
          <td>Test</td>
        </tr>
      </tbody>
    </Table>
  );
  expect(screen.getByTestId('table')).toHaveStyle('opacity: 0.6');
});
