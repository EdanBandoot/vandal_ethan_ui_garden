import type { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    backgroundImage: { control: 'text' },
    subtitle: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOiWzIOXRG1TMXp_rtyrq--wTGxNYNXgvzw&s',
    title: 'welcome to my library',
    subtitle: 'lets make components!',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOiWzIOXRG1TMXp_rtyrq--wTGxNYNXgvzw&s',
    title: 'Disabled Hero Image',
    subtitle: 'unniteractable state',
    disabled: true,
  },
};
