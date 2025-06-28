import React from 'react';

export interface TextProps {
  children: React.ReactNode;
  disabled?: boolean;
  color?: string;
  size?: string | number;
}