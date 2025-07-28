import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const Select = styled.select<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: 6px;
  font-size: 2rem;
  border: 2px solid #ccccc;
  border-radius: 12px;
  background-color: ${({ disabled }) => (disabled ? '#eeeee' : 'white')};
  color: ${({ disabled }) => (disabled ? '#99999' : 'black')};
  width: 85%;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, selectedValue, onChange, disabled = false }) => {
  return (
    <Select disabled={disabled} value={selectedValue} onChange={(e) => onChange && onChange(e.target.value)}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
