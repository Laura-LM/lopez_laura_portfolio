import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types.js';

const StyledTfoot = styled.tfoot<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#f8f8f8')};
  border-top: 2px solid #ddd;
  font-weight: 500;
  
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled }) => (
  <StyledTfoot disabled={disabled} data-testid="table-footer">
    {children}
  </StyledTfoot>
);

export default TableFooter;
