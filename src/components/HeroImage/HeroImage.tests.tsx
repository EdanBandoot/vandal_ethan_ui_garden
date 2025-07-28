import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  it('should display the title and subtitle', () => {
    render(<HeroImage backgroundImage="swag.jpg" title="welcome to my library" subtitle="lets make components!" />);
    expect(screen.getByText('welcome to my library')).toBeVisible();

    expect(screen.getByText('lets make components!')).toBeVisible();
  });

  it('should be gray', () => {
    render(<HeroImage backgroundImage="swag.jpg" subtitle="Hidden" title="Disabled" disabled />);
    const container = screen.getByTestId('hero-container');
    expect(container).toHaveStyle('pointer-events: none');
    expect(container).toHaveStyle('filter: grayscale(100%)');
  });
});
