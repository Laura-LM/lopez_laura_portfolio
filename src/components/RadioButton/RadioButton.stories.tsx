import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => {
  const [checked, setChecked] = useState(args.checked || false);
  return (
    <RadioButton
      {...args}
      checked={checked}
      onChange={setChecked}
    />
  );
};

export const Default = Template.bind({}) as any;
Default.args = {
  label: 'Radio Button',
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({}) as any;
Disabled.args = {
  label: 'Disabled Radio',
  checked: false,
  disabled: true,
};