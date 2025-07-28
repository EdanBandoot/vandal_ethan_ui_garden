import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const Container = styled.div<{ backgroundImage: string; disabled?: boolean }>`
  background-image: url(${(props) => props.backgroundImage});
  color: white;
  background-size: cover;
  background-position: center;
  padding: 5rem 1rem;
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};,
  text-align: center;
`;

const Title = styled.h1`
  font-size: 12px;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
`;

const HeroImage: React.FC<HeroImageProps> = ({ backgroundImage, title, subtitle, disabled }) => {
  return (
    <Container backgroundImage={backgroundImage} disabled={disabled} data-testid="hero-container">
      <Title>{title}</Title>

      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  );
};

export default HeroImage;
