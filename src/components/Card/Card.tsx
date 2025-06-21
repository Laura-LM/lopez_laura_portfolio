import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#d3d3d3' : backgroundColor || '#fff'};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Card: React.FC<CardProps> = ({ children, disabled, backgroundColor }) => (
  <StyledCard disabled={disabled} backgroundColor={backgroundColor}>
    {children}
  </StyledCard>
);

export default Card;