import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";
import "jest-styled-components";


// samples
const sampleOptions = [
  { label: "Option 1", value: "opt1" },
  { label: "Option 2", value: "opt2" },
];


describe("Dropdown Component", () => {
  it("Should be visible", () => {
    render(<Dropdown options={sampleOptions} selectedValue="opt1" />);
    const option1 = screen.getByText("Option 1");
    expect(option1).toBeVisible();
  });

  it("Should be gray", () => {
    render(<Dropdown options={sampleOptions} disabled />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveStyle("background-color: #eeeee");
    expect(select).toHaveStyle("cursor: not-allowed");
  });
});