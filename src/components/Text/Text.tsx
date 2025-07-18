import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types.js';

const StyledText = styled.span<{
  disabled?: boolean;
  color?: string;
  size?: string | number;
}>`
  color: ${({ disabled, color }) => (disabled ? '#a0a0a0' : color || '#222')};
  font-size: ${({ size }) => size || '1rem'};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
  transition: color 0.3s;
`;

const Text: React.FC<TextProps> = ({ children, disabled, color, size }) => (
  <StyledText disabled={disabled} color={color} size={size} data-testid="text">
    {children}
  </StyledText>
);

export default Text;
