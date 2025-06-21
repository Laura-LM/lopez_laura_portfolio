import React from 'react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

const Template = (args: HeroImageProps) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  alt: 'Nature',
  height: '300px',
  disabled: false,
  children: 'Hero Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};