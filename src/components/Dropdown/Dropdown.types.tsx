import React from 'react';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  selectedValue?: string;
  options: DropdownOption[];
  onChange?: (value: string) => void;
  disabled?: boolean;
}
