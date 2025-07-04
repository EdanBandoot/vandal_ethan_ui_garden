import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TableHeader from "./TableHeader";
import TableCell from "../TableCell/TableCell";

const meta: Meta<typeof TableHeader> = {
  title: "Components/Table/TableHeader",
  component: TableHeader,
  tags: ["autodocs"],
  argTypes: {

    disabled: { control: "boolean" },
  },
};

export default meta;
// Define the type for the story
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    children: (
      <>

        <TableCell>Header</TableCell>
        <TableCell>Header agane</TableCell>
      </>
    ),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <TableCell>Header</TableCell>
        <TableCell>Header agane</TableCell>
      </>
    ),
    disabled: true,
  },

};