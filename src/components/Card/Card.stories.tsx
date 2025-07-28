import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card title',
    content: 'This is on the card',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled card',
    content: 'This card hqw been disabled.',
    disabled: true,
  },
};
