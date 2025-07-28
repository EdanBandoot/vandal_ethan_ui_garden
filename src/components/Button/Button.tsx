import React from 'react';
import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  backgroundColor,
  type = 'button',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <StyledButton type={type} disabled={disabled} onClick={handleClick} backgroundColor={backgroundColor} {...props}>
      {children}
    </StyledButton>
  );
};
export default Button;
