import React from 'react';
import RadioButton from './RadioButton';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    checked: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    disabled: false,
    label: 'Option 1',
    name: 'buttons 1',
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Option 2',
    name: 'buttons 1',
    checked: true,
  },
};
