import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  backgroundColor?: string;
  type?: 'button' | 'submit' | 'reset';
}
