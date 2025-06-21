import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.div<{ disabled?: boolean }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const StyledImg = styled.img<{ height?: string | number }>`
  width: 100%;
  height: ${({ height }) => (height ? height : '300px')};
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, height, disabled, children }) => (
  <StyledHero disabled={disabled} data-testid="hero-image">
    <StyledImg src={src} alt={alt} height={height} />
    {children && <Overlay>{children}</Overlay>}
  </StyledHero>
);

export default HeroImage;