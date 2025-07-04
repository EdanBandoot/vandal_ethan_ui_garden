import styled from "styled-components";
import React from "react";

export interface CardProps {
  title: string;
  content?: string;

  disabled?: boolean;
}
// This component is a styled card that can be used to display content with a title.
const StyledCard = styled.div<{ disabled?: boolean; }>`
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? "#f5f5f5" : "white")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 3rem;
`;



const Card: React.FC<CardProps> = ({ title, content, disabled }) => {
  return (
    <StyledCard disabled={disabled} data-testid="card-container">
      <h3>{title}</h3>

      {content && <p>{content}</p>}
    </StyledCard>

  );
};

export default Card;