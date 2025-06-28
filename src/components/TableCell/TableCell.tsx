import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types.js';

const StyledTd = styled.td<{ disabled?: boolean }>`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : 'transparent')};
  
  @media (max-width: 600px) {
    padding: 6px;
    font-size: 0.9rem;
  }
`;

const StyledTh = styled.th<{ disabled?: boolean }>`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  background-color: ${({ disabled }) => (disabled ? '#e0e0e0' : '#f0f0f0')};
  font-weight: bold;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  
  @media (max-width: 600px) {
    padding: 6px;
    font-size: 0.9rem;
  }
`;

const TableCell: React.FC<TableCellProps> = ({ children, disabled, asHeader }) =>
  asHeader ? (
    <StyledTh disabled={disabled} data-testid="table-cell">
      {children}
    </StyledTh>
  ) : (
    <StyledTd disabled={disabled} data-testid="table-cell">
      {children}
    </StyledTd>
  );

export default TableCell;
