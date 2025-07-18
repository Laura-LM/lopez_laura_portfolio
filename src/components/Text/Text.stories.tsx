import React from 'react';
import Text from './Text';

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

const Template = (args: any) => <Text {...args} />;

export const Default = Template.bind({}) as any;
Default.args = {
  children: 'Sample text',
  disabled: false,
  color: '#222',
  size: '1rem',
};

export const Disabled = Template.bind({}) as any;
Disabled.args = {
  children: 'Disabled text',
  disabled: true,
  color: '#222',
  size: '1rem',
};
