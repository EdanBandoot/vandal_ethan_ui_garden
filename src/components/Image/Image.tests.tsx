import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Img from './Image';

describe('Image Component', () => {
  it('should render', () => {
    render(<Img src="test.png" alt="it seems to be a sad crab" />);
    const img = screen.getByAltText('it seems to be a sad crab') as HTMLImageElement;
    expect(img).toBeVisible();
  });

  it('should be grey', () => {
    render(<Img src="test.png" alt="disabled image" disabled />);
    const img = screen.getByAltText('disabled image');
    expect(img).toHaveStyle('pointer-events: none');
    expect(img).toHaveStyle('filter: grayscale(100%)');
  });
});
