import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Img from "./Image";

const meta: Meta<typeof Img> = {
  title: "Components/Image",
  component: Img,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    disabled: false,
    src: "https://cdn.vectorstock.com/i/1000v/23/37/sad-crab-on-white-background-vector-26442337.jpg",
    alt: "it seems to be a sad crab",
    width: "200px",
    height: "200px",

  },
};


export const Disabled: Story = {
  args: {
    disabled: true,
    src: "https://cdn.vectorstock.com/i/1000v/23/37/sad-crab-on-white-background-vector-26442337.jpg",
    alt: "Disabled Image",
    width: "200px",
    height: "200px",

  },
};