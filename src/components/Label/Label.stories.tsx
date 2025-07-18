import React from 'react';
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    disabled: { control: 'boolean' },
    color: { control: 'color' },
    children: { control: 'text' },
  },
};

const Template = (args: any) => <Label {...args} />;

export const Default = Template.bind({}) as any;
Default.args = {
  children: 'Label text',
  disabled: false,
  color: '#222',
};

export const Disabled = Template.bind({}) as any;
Disabled.args = {
  children: 'Disabled label',
  disabled: true,
  color: '#222',
};
