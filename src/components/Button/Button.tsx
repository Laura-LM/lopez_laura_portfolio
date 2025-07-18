import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types.js';

const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 4px;
  background: ${({ disabled }) => (disabled ? '#d3d3d3' : '#007bff')};
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.3s;

  @media (max-width: 600px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
// Test pre-commit hook
// Test updated configuration
