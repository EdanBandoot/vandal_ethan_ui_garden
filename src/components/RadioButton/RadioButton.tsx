import React from 'react';

import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const Label = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) => (disabled ? '#99999' : 'inherit')};
`;

const Input = styled.input`
  margin-right: 8px;
`;
// This component is a styled radio button that can be used to select one option from a set.
const RadioButton: React.FC<RadioButtonProps> = ({ label, name, disabled = false, checked = false, onChange }) => {
  return (
    <Label data-testid="radio-label" disabled={disabled}>
      <Input
        type="radio"
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      {label}
    </Label>
  );
};

export default RadioButton;
