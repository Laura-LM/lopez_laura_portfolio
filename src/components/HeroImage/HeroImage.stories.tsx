import React from 'react';
import HeroImage from './HeroImage';

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

const Template = (args: any) => <HeroImage {...args} />;

export const Default = Template.bind({}) as any;
Default.args = {
  src: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Nature',
  height: '300px',
  disabled: false,
  children: 'Hero Text',
};

export const Disabled = Template.bind({}) as any;
Disabled.args = {
  ...Default.args,
  disabled: true,
};
