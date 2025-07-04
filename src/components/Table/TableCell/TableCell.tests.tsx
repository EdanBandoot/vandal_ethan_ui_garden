import React from "react";
import { render, screen } from "@testing-library/react";
import TableCell from "./TableCell";

describe("TableCell Component", () => {
  it("renders", () => {
    render(<TableCell>cell</TableCell>);
    expect(screen.getByText("cell")).toBeVisible();
  });

  it("disables", () => {
    render(<TableCell disabled>Disabled cell</TableCell>);
    const cell = screen.getByText("disabled");
    expect(cell).toHaveStyle("color: #99999");
    expect(cell).toHaveStyle("background-color: #ffffff");
  });
});