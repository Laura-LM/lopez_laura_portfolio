import React from 'react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    disabled: { control: 'boolean' },
    color: { control: 'color' },
    children: { control: 'text' },
  },
};

const Template = (args: LabelProps) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Label text',
  disabled: false,
  color: '#222',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled label',
  disabled: true,
  color: '#222',
};