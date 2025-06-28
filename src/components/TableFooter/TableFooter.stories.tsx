import React from 'react';
import TableFooter from './TableFooter';

export default {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

const Template = (args: any) => (
  <table>
    <tbody>
      <tr>
        <td>Sample Data 1</td>
        <td>Sample Data 2</td>
      </tr>
    </tbody>
    <TableFooter {...args}>
      <tr>
        <td>Footer 1</td>
        <td>Footer 2</td>
      </tr>
    </TableFooter>
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
