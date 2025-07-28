import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  font-size: 4rem;
  color: ${({ disabled }) => (disabled ? '#99999' : '#33333')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const Label: React.FC<LabelProps> = ({ text, htmlFor, disabled }) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export default Label;

// This component is a styled label that can be used to display text associated with form elements.
// It accepts a text prop for the label text, an optional htmlFor prop to associate it
