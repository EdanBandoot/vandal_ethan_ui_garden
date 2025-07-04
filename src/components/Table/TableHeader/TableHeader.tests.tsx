import React from "react";
import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";
import TableCell from "../TableCell/TableCell";

describe("TableHeader Component", () => {

  it("makes the header visible", () => {
    render(
      <table>
        <TableHeader>
          <TableCell>Header</TableCell>
          <TableCell>Header agane</TableCell>
        </TableHeader>
      </table>
    );
    expect(screen.getByText("Header")).toBeVisible();
    expect(screen.getByText("Header agane")).toBeVisible();
  });

  it("disables it", () => {
    render(
      <table>
        <TableHeader disabled>
          <TableCell>Header</TableCell>
          <TableCell>Header agane</TableCell>
        </TableHeader>
      </table>
    );
    const header1 = screen.getByText("Header");
    expect(header1).toHaveStyle("color: #99999");

    expect(header1).toHaveStyle("background-color: #ffffff");
  });
});

// This test suite checks the functionality of the TableHeader component, ensuring it renders correctly and applies styles when disabled.