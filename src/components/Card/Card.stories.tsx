import React from 'react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    children: { control: 'text' },
  },
};

const Template = (args: any) => <Card {...args} />;

export const Default = Template.bind({}) as any;
Default.args = {
  children: 'This is a card!',
  disabled: false,
  backgroundColor: '#fff',
};

export const Disabled = Template.bind({}) as any;
Disabled.args = {
  children: 'This card is disabled.',
  disabled: true,
  backgroundColor: '#fff',
};