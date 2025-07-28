import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import TableFooter from './TableFooter';
import TableCell from '../TableCell/TableCell';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/Table/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

// Define the type for the story
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableCell>Footer</TableCell>
        <TableCell>Footer again</TableCell>
      </>
    ),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <TableCell>Footer</TableCell>
        <TableCell>Footer again</TableCell>
      </>
    ),
    disabled: true,
  },
};
