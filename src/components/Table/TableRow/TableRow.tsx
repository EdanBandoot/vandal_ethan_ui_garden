import React from 'react';
import styled from 'styled-components';
import type { TableRowProps } from './TableRow.types';

const StyledTr = styled.tr<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? '#ffffff' : 'transparent')};
  color: ${(props) => (props.disabled ? '#99999' : 'inherit')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled = false }) => {
  return (
    <StyledTr disabled={disabled} aria-disabled={disabled}>
      {React.Children.map(children, (child) =>
        React.isValidElement<{ disabled?: boolean }>(child) ? React.cloneElement(child, { disabled }) : child
      )}
    </StyledTr>
  );
};

export default TableRow;
