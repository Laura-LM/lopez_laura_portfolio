import React from 'react';

export interface HeroImageProps {
  src: string;
  alt?: string;
  height?: string | number;
  disabled?: boolean;
  children?: React.ReactNode;
}