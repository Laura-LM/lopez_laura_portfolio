import React from 'react';
import Img from './Img';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => <Img {...args} />;

export const Default = Template.bind({}) as any;
Default.args = {
  src: 'https://images.unsplash.com/photo-1569690681342-d74eb25436fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Placeholder image',
  width: '300',
  height: '200',
  disabled: false,
};

export const Disabled = Template.bind({}) as any;
Disabled.args = {
  ...Default.args,
  disabled: true,
};