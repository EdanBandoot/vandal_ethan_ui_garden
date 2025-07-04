import Text from "./Text";
import type { Meta, StoryObj } from "@storybook/react-webpack5";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    text: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: "just text",
    disabled: false,
  },
};
//tsx xtc


export const Disabled: Story = {
  args: {
    text: "no text",
    disabled: true,
  },
};