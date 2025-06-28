import React from 'react';
import TableRow from './TableRow';

export default {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

const Template = (args: any) => (
  <table>
    <tbody>
      <TableRow {...args}>
        <td>Cell 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
      </TableRow>
    </tbody>
  </table>
);

export const Default = Template.bind({}) as any;
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({}) as any;
Disabled.args = {
  disabled: true,
};
