import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types.js';

const StyledImg = styled.img<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: block;
  max-width: 100%;
  height: auto;
  transition: opacity 0.3s;
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => (
  <StyledImg
    src={src}
    alt={alt}
    width={width}
    height={height}
    disabled={disabled}
    data-testid="img"
  />
);

export default Img;