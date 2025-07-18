import React from 'react';
import Table from './Table';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

const Template = (args: any) => (
  <Table {...args}>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
      </tr>
      <tr>
        <td>Cell 3</td>
        <td>Cell 4</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Footer 1</td>
        <td>Footer 2</td>
      </tr>
    </tfoot>
  </Table>
);

export const Default = Template.bind({}) as any;
Default.args = {
  disabled: false,
};

export const Disabled = Template.bind({}) as any;
Disabled.args = {
  disabled: true,
};
