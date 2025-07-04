import React from 'react';
// This file defines the types for the RadioButton component in the UI Garden library.
export interface RadioButtonProps {
  name: string;
  disabled?: boolean;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}