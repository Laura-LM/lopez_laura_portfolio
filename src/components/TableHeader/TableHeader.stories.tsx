import React from 'react';
import TableHeader from './TableHeader';
import { TableHeaderProps } from './TableHeader.types';

export default {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

const Template = (args: any) => (
  <table>
    <TableHeader {...args}>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </TableHeader>
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
