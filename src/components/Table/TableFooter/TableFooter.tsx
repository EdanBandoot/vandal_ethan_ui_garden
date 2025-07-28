import React from 'react';
import type { TableFooterProps } from './TableFooter.types';
import styled from 'styled-components';

const StyledTfoot = styled.tfoot`
  background-color: rgb(255, 255, 255);
`;

const StyledTd = styled.td<{ disabled?: boolean }>`
  padding: 12px;
  border: 2px solid rgb(168, 8, 8);
  color: ${({ disabled }) => (disabled ? '#99999' : 'inherit')};
  background-color: ${({ disabled }) => (disabled ? '#ffffff' : 'inherit')};
`;

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled, className }) => {
  return (
    <StyledTfoot className={className}>
      <tr>
        {React.Children.map(children, (child) =>
          React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { disabled }) : child
        )}
      </tr>
    </StyledTfoot>
  );
};
// This component is a styled table footer that can be used to display footer content in a table.
export default TableFooter;
