import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

const Template = (args: any) => <Button {...args} />;

export const Default = Template.bind({}) as any;
Default.args = {
  children: 'Click Me',
  disabled: false,
};

export const Disabled = Template.bind({}) as any;
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};