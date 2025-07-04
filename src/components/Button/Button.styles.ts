import styled from 'styled-components';
import { darken } from 'polished';

interface StyledButtonProps {
  backgroundColor?: string;
  disabled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#007bff'};
  color: white;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? '#cccccc' : props.backgroundColor ? darken(0.1, props.backgroundColor) : '#0069d9'};
  }
`;