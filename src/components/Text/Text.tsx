import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{ disabled?: boolean; }>`
  font-size: 5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
  color: ${({ disabled }) => (disabled ? "#99999" : "#000e0")};
`;

// This component is a styled text element that can be used to display text with optional disabled styling.
const Text: React.FC<TextProps> = ({ text, disabled = false }) => {
  return <StyledText disabled={disabled}>{text}</StyledText>;
};


export default Text;