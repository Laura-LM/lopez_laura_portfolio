import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types.js';

const StyledThead = styled.thead<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#fafafa')};

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled }) => (
  <StyledThead disabled={disabled} data-testid="table-header">
    {children}
  </StyledThead>
);

export default TableHeader;
