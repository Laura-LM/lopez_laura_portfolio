import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types.js';

const Wrapper = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  user-select: none;
`;

const StyledRadio = styled.input.attrs({ type: 'radio' })<{ disabled?: boolean }>`
  accent-color: ${({ disabled }) => (disabled ? '#d3d3d3' : '#007bff')};
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  checked,
  onChange,
  disabled,
  name,
  value,
}) => (
  <Wrapper disabled={disabled} data-testid="radio-wrapper">
    <StyledRadio
      checked={checked}
      onChange={e => onChange && onChange(e.target.checked)}
      disabled={disabled}
      name={name}
      value={value}
      data-testid="radio-input"
    />
    {label}
  </Wrapper>
);

export default RadioButton;