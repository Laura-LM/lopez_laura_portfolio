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
  src: 'https://via.placeholder.com/300x200',
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