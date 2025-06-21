import React from 'react';

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  disabled?: boolean;
  color?: string;
}