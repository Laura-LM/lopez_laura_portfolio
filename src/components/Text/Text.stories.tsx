import React from 'react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    disabled: { control: 'boolean' },
    color: { control: 'color' },
    size: { control: 'text' },
    children: { control: 'text' },
  },
};

const Template = (args: TextProps) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Sample text',
  disabled: false,
  color: '#222',
  size: '1rem',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled text',
  disabled: true,
  color: '#222',
  size: '1rem',
};