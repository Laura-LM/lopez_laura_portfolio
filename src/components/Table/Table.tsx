import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types.js';

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#fff')};
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Table: React.FC<TableProps> = ({ children, disabled }) => (
  <StyledTable disabled={disabled} data-testid="table">
    {children}
  </StyledTable>
);

export default Table;
