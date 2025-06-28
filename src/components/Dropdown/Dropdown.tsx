import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types.js';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({ disabled }) => (disabled ? '#d3d3d3' : '#fff')};
  color: #333;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  width: 100%;
  transition: background-color 0.3s;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, disabled }) => (
  <StyledSelect
    value={value}
    onChange={e => onChange && onChange(e.target.value)}
    disabled={disabled}
    data-testid="dropdown"
  >
    {options.map(opt => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;