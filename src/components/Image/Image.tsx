import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Image.types';

//
const StyledImg = styled.img<{ disabled?: boolean }>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  opacity: ${({ disabled }) => (disabled ? 0.25 : 1)};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};

export default Img;
