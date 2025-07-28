import React from 'react';
import type { TableCellProps } from './TableCell.types';
import styled from 'styled-components';

const StyledTd = styled.td<{ disabled?: boolean }>`
  padding: 12px;
  border: 2px dotted #ddddd;
  background-color: ${({ disabled }) => (disabled ? '#ffffff' : 'white')};
  color: ${({ disabled }) => (disabled ? '#99999' : 'inherit')};
`;

const TableCell: React.FC<TableCellProps> = ({ children, disabled, className }) => {
  return (
    <StyledTd disabled={disabled} className={className}>
      {children}
    </StyledTd>
  );
};

export default TableCell;
