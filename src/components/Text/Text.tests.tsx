import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Text from './Text';

describe('Text Component', () => {
  it('should be visible!', () => {
    render(<Text text="Hewwo worlt" />);
    const element = screen.getByText('Hewwo worlt');
    expect(element).toBeVisible();
  });

  it('should be gray', () => {
    render(<Text text="no text" disabled />);
    const element = screen.getByText('no text');
    expect(element).toHaveStyle('color: #99999');
    expect(element).toHaveStyle('cursor: not-allowed');
  });
});
