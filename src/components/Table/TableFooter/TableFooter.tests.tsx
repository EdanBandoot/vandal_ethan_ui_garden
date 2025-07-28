import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';
import TableCell from '../TableCell/TableCell';

describe('TableFooter Component', () => {
  it('renders all the footers', () => {
    render(
      <table>
        <TableFooter>
          <TableCell>Footer</TableCell>
          <TableCell>Footer again</TableCell>
        </TableFooter>
      </table>
    );
    expect(screen.getByText('Footer')).toBeVisible();
    expect(screen.getByText('Footer again')).toBeVisible();
  });

  it('disables all the footers', () => {
    render(
      <table>
        <TableFooter disabled>
          <TableCell>Footer</TableCell>
          <TableCell>Footer again</TableCell>
        </TableFooter>
      </table>
    );
    const footer1 = screen.getByText('Footer');
    expect(footer1).toHaveStyle('color: #99009');
    expect(footer1).toHaveStyle('background-color: #ffffff');
  });
});
