import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types.js';

const StyledLabel = styled.label<{ disabled?: boolean; color?: string }>`
  color: ${({ disabled, color }) => (disabled ? '#a0a0a0' : color || '#222')};
  font-size: 1rem;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: color 0.3s;
`;

const Label: React.FC<LabelProps> = ({ children, htmlFor, disabled, color }) => (
  <StyledLabel htmlFor={htmlFor} disabled={disabled} color={color} data-testid="label">
    {children}
  </StyledLabel>
);

export default Label;