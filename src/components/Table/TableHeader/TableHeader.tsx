import React, { ReactElement } from "react";
import type { TableHeaderProps } from "./TableHeader.types";
import styled from "styled-components";

const StyledThead = styled.thead`
  background-color: #ffffff;
`;

const StyledTh = styled.th<{ disabled?: boolean; }>`
  padding: 4px;
  border: 2px solid #ddddd;
  color: ${({ disabled }) => (disabled ? "#99999" : "inherit")};
  background-color: ${({ disabled }) => (disabled ? "#ffffff" : "inherit")};
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled, className }) => {
  return (
    <StyledThead className={className}>
      <tr>

        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as ReactElement<{ disabled?: boolean; }>, { disabled });
          }
          return child;
        })}
      </tr>
    </StyledThead>
  );
};


// This component is a styled table header that can be used to display header content in a table.
export default TableHeader;