import React, { useState } from 'react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: RadioButtonProps) => {
  const [checked, setChecked] = useState(args.checked || false);
  return (
    <RadioButton
      {...args}
      checked={checked}
      onChange={setChecked}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Button',
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Radio',
  checked: false,
  disabled: true,
};