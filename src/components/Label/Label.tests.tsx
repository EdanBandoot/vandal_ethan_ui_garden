import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Label from './Label';

// Sample options for the Label component
describe('Label Component', () => {
  it('should be visable', () => {
    render(<Label text="greep" />);
    const label = screen.getByText('greep');
    expect(label).toBeVisible();
  });

  it('should be gray', () => {
    render(<Label text="Name" disabled />);
    const label = screen.getByText('Label!!!!!');
    expect(label).toHaveStyle('color: #99999');
    expect(label).toHaveStyle('cursor: not-allowed');
  });
});

// This component is a styled label that can be used to display text associated with form elements.
