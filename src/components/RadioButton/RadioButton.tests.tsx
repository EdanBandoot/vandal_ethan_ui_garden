import React from "react";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";


describe("RadioButton Component", () => {
  it("should render", () => {
    render(<RadioButton label="Radio killed the video star" name="testa" />);
    expect(screen.getByLabelText("Radio killed the video star")).toBeVisible();
  });



  it("should be disabled", () => {
    render(<RadioButton label="Disabled" name="geep" disabled />);
    const radio = screen.getByLabelText("Disabled");
    expect(radio).toBeDisabled();
//    expect(radio).toHaveStyle("cursor: not-allowed");
    const label = screen.getByTestId("radio-label");
    expect(label).toHaveStyle("color: #99999");
    expect(label).toHaveStyle("cursor: not-allowed");
  });
});