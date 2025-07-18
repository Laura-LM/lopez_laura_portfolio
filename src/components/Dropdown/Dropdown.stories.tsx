import React, { useState } from 'react';
import Dropdown from './Dropdown';
// import { DropdownProps } from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
    value: { control: 'text' },
  },
};

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const Template = (args: any) => {
  const [selected, setSelected] = useState(args.value || options[0].value);
  return (
    <Dropdown
      {...args}
      value={selected}
      onChange={setSelected}
      options={options}
    />
  );
};

export const Default = Template.bind({}) as any;
Default.args = {
  value: '1',
  disabled: false,
  options,
};

export const Disabled = Template.bind({}) as any;
Disabled.args = {
  value: '1',
  disabled: true,
  options,
};
