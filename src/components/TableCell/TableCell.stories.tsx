import React from 'react';
import TableCell from './TableCell';

export default {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    disabled: { control: 'boolean' },
    asHeader: { control: 'boolean' },
    children: { control: 'text' },
  },
};

const Template = (args: any) => (
  <table>
    <tbody>
      <tr>
        <TableCell {...args}>Cell Content</TableCell>
      </tr>
    </tbody>
  </table>
);

const HeaderTemplate = (args: any) => (
  <table>
    <thead>
      <tr>
        <TableCell {...args} asHeader>
          Header Content
        </TableCell>
      </tr>
    </thead>
  </table>
);

export const Default = Template.bind({}) as any;
Default.args = {
  disabled: false,
  asHeader: false,
};

export const Disabled = Template.bind({}) as any;
Disabled.args = {
  disabled: true,
  asHeader: false,
};

export const Header = HeaderTemplate.bind({}) as any;
Header.args = {
  disabled: false,
  asHeader: true,
};

export const HeaderDisabled = HeaderTemplate.bind({}) as any;
HeaderDisabled.args = {
  disabled: true,
  asHeader: true,
};
