import Label from "./Label";
import type { Meta, StoryObj } from "@storybook/react-webpack5";


const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    htmlFor: { control: "text" },
    text: { control: "text" },


  },
};

export default meta;

type Story = StoryObj<typeof Label>;

// Sample options for the Label component
export const Default: Story = {
  args: {
    disabled: false,
    text: "Label!!!!!",
  },
};
// This story demonstrates the default state of the Label component
export const Disabled: Story = {
  args: {
    disabled: true,
    text: "glorp!",
  },
};