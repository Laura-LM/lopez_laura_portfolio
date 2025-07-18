import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types.js';

const StyledTr = styled.tr<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : 'transparent')};

  &:nth-child(even) {
    background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#f9f9f9')};
  }

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#f0f0f0')};
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled }) => (
  <StyledTr disabled={disabled} data-testid="table-row">
    {children}
  </StyledTr>
);

export default TableRow;
